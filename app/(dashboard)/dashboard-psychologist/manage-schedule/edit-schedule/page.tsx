import { ScrollArea } from "@/components/ui/scroll-area";
import FormSchedule from "../_components/form-shedule";

const schedules = [
  { day: "Every Monday", status: "Scheduled", time: "09:00 - 12:00" },
  { day: "Every Tuesday", status: "Scheduled", time: "10:00 - 11:00" },
  { day: "Every Wednesday", status: "Available", time: "13:00 - 14:00" },
  { day: "Every Thursday", status: "Scheduled", time: "15:00 - 16:00" },
  { day: "Every Friday", status: "Available", time: "09:00 - 10:00" },
];
export default function ManageSchedulePsycholog() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Edit Schedule
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Edit your availability for your appointment with patient
      </p>
      <div className="flex gap-5 flex-col lg:flex-row mt-10">
        <div className="bg-secondary-custom_secondary p-5 flex-1 rounded-3xl">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Set Consultations Schedule
            </h3>
          </center>
          <FormSchedule />
        </div>
      </div>
    </>
  );
}
