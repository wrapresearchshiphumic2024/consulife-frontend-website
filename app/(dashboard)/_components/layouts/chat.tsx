"use client";

import { useCallback } from "react";
import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  DefaultStreamChatGenerics,
  MessageInput,
  MessageList,
  Window,
  useCreateChatClient,
} from "stream-chat-react";

import { ChannelSort } from "stream-chat";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function App({
  apiKey,
  createToken,
  userId,
  channelId,
  userName,
  channelList = false,
  image,
}: {
  apiKey: string;
  createToken: (userId: string) => Promise<string>;
  userId: string;
  channelId?: string;
  userName: string;
  channelList?: boolean;
  image: string;
}) {
  const tokenProvider = useCallback(async () => {
    return await createToken(userId);
  }, [createToken, userId]);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: tokenProvider,
    userData: {
      id: userId,
      name: userName,
      image: image,
    },
  });

  const sort: ChannelSort<DefaultStreamChatGenerics> = { last_message_at: -1 };

  const filters = channelId
    ? {
        type: "messaging",
        cid: { $in: [channelId] },
      }
    : {
        type: "messaging",
        members: { $in: [userId] },
      };

  const options = {
    limit: 10,
  };

  // Fungsi untuk membuat channel privat dengan 2 anggota
  const createPrivateChannel = async () => {
    const channel = client?.channel("messaging", {
      members: [
        "Psycholog_f989c982-fb97-4d63-939d-e445b81e9d66",
        "patient2_0a8fce02-6442-4341-abbd-b51fe7d46519",
      ],
      created_by_id: userId,
    });

    await channel?.create();
  };

  if (!client) return <div>Setting up client & connection</div>;
  return (
    <>
      <Chat
        client={client}
        customClasses={{
          channelList: channelList ? "hidden" : "",
        }}
      >
        <ChannelList
          sort={sort}
          options={options}
          filters={filters}
          showChannelSearch
        />

        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </>
  );
}
