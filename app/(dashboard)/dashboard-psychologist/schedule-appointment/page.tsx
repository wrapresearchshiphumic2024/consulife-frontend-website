import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

import { auth } from "@/auth";
import { getAppointmentSchedule } from "@/services/psychologist/psychologist-service";
import { formatFullName, getInitials } from "@/helpers/string-helpers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ManageButtonGroup from "./_components/manage-button-group";

export default async function ScheduledApp() {
  const session = await auth();
  const appointments = await getAppointmentSchedule(session?.user.access_token);

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold mb-[10px]">
        Scheduled Appointment
      </h2>
      <p className="text-[#1E034280] font-semibold">
        Manage patient appointments, complete or decline consultations, and view
        patient details.
      </p>

      {appointments.length === 0 ? (
        <div className="mt-10 text-[#1E0342] font-semibold flex justify-center items-center">
          No psychologist scheduled appointment
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {appointments.map((appointment, index) => (
            <Card
              key={index}
              className="rounded-[30px] shadow-lg bg-[#FCFCFC] w-full"
            >
              <div
                className={`rounded-t-[20px] p-3 text-white text-center font-bold capitalize ${
                  appointment.status === "ongoing"
                    ? "bg-[#28A745]"
                    : appointment.status === "waiting"
                    ? "bg-[#272C4D]"
                    : "bg-[#DC3545]"
                }`}
              >
                {appointment.status}
              </div>

              <div className="p-5">
                <div className="flex flex-col items-center mt-4">
                  <Avatar className="rounded-full w-24 h-24 mb-4">
                    <AvatarImage
                      src={appointment.user.profile_picture || ""}
                      alt={`${appointment.user.firstname} ${appointment.user.lastname}`}
                    />
                    <AvatarFallback>
                      {getInitials(
                        appointment.user.firstname,
                        appointment.user.lastname
                      )}
                    </AvatarFallback>
                  </Avatar>

                  <h2 className="text-xl font-semibold text-center mb-2">
                    {formatFullName(
                      appointment.user.firstname,
                      appointment.user.lastname
                    )}
                  </h2>
                  <div className="text-left space-y-3">
                    <p className="capitalize">
                      Gender: {appointment.user.gender}
                    </p>
                    <p>Phone number: {appointment.user.phone_number}</p>
                    <p>Day & Time: {appointment.date}</p>
                  </div>
                </div>

                <div className="flex justify-center gap-2 w-full px-4 flex-wrap mt-6">
                  <ManageButtonGroup
                    id={appointment.id.toString()}
                    access_token={session?.user.access_token}
                    status={appointment.status}
                  />
                  <Link
                    href={`/dashboard-psychologist/schedule-appointment/${appointment.id}/detail`}
                  >
                    <Button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                      Detail
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
