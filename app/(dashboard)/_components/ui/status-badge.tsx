import { Badge } from "@/components/ui/badge"; // Pastikan Anda mengimpor Badge dari ShadCN
import { cn } from "@/lib/utils";

export default function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      className={cn(
        "md:w-32 w-24 h-10 text-sm md:text-md text-center rounded-xl flex items-center justify-center capitalize ",
        status === "ongoing" && "bg-green-500 hover:bg-green-500",
        (status === "waiting" || status === "completed") &&
          "bg-primary-custom_primary hover:bg-primary-custom_primary",
        status === "canceled" && "bg-red-500 hover:bg-red-500"
      )}
    >
      {status}
    </Badge>
  );
}
