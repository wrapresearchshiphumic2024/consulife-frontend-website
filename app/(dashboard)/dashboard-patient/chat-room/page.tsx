import { createToken } from "@/actions/chat-token";
import App from "@/app/(dashboard)/_components/layouts/chat";

export default function Home() {
  const apiKey = process.env.API_KEY;

  const userId = "Patient_17fd95c7-eb1b-4140-9dcf-4d52f0560ec9";
  const userName = "Patient";

  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Chatroom
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Chat with pscyhologist appointments
      </p>
      <div className="flex h-[530px]  w-full p-5 bg-white rounded-3xl mt-5">
        <App
          apiKey={apiKey}
          createToken={createToken}
          userId={userId}
          userName={userName}
          image={
            "https://media.istockphoto.com/id/2155498773/id/foto/wanita-percaya-diri-berjalan-dengan-koper-merah-di-lingkungan-perkotaan-modern.jpg?s=2048x2048&w=is&k=20&c=v5ZXzWRBGbXJl2XnYAPSVYW3h9Fk4z-0Hy39GhZZIUg="
          }
        />
      </div>
    </>
  );
}
