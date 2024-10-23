import { Card } from "@/components/ui/card";

export default function Complaint() {
  const complaints = [
    {
      date: "2024-10-01",
      content:
        "I often feel overwhelmed with my daily tasks, and I struggle to find motivation. I have trouble sleeping and frequently feel anxious about upcoming deadlines. Additionally, I sometimes feel sad without any specific reason, making it difficult to enjoy things I once liked.",
    },
    {
      date: "2024-09-29",
      content:
        "Over the past month, I’ve experienced significant mood swings. Some days I feel extremely sad without any particular reason, and I lose interest in things I usually enjoy. Other times, I’m irritable and get frustrated easily. These shifts in my mood are affecting my relationships with family and friends, and I’m struggling to manage my emotions. I’m also finding it hard to stay motivated at work.",
    },
    {
      date: "2024-08-11",
      content:
        "I have been feeling constantly anxious over the past few weeks. Small tasks seem overwhelming, and I often find myself worrying about things that haven’t even happened yet. My sleep patterns have been erratic, and I wake up frequently in the middle of the night feeling tense. These feelings of unease are making it difficult for me to concentrate at work, and I’m starting to withdraw from social activities.",
    },
    {
      date: "2024-06-21",
      content:
        "I’ve been under a lot of stress recently due to increased responsibilities at work. I feel like there’s no time to relax, and I’ve noticed that I’m becoming more forgetful and distracted. I often feel exhausted even after a full night’s sleep, and I’m having trouble balancing my work and personal life. This constant pressure is making me feel burned out, and I’m worried it’s affecting my health.",
    },
  ];

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Patient Complaint
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        View patient complaint on this page
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        {complaints.map((complaint, index) => (
          <Card key={index} className="p-6 rounded-[30px] shadow-md bg-white">
            <h2 className="text-[#27374D] font-semibold mb-2">
              {complaint.date}
            </h2>
            <p className="text-gray-700">{complaint.content}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
