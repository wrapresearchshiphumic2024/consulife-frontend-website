import TableAppointmentHistory from "./_components/ui/table-appointment-history";

export default function AppointmentHistory() {
  return (
    <>
      <div className="w-full">
        <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
          Appointment History
        </h2>
        <p>Tracking and Managing Your Consultation Sessions</p>
      </div>

      <div className="bg-secondary-custom_secondary p-5 mt-10 rounded-3xl w-full">
        <div className="w-72 sm:w-96 md:w-full overflow-auto">
          <TableAppointmentHistory />
        </div>
      </div>
    </>
  );
}
