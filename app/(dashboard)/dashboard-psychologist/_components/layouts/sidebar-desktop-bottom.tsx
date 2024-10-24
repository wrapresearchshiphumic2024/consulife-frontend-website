"use client";
import IconSetting from "@/components/icons/icon-setting";
import IconSignOut from "@/components/icons/icon-signout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export default function SidebarDesktopPsychologistBottom() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard-psychologist/settings"
        className={cn(
          pathname === "/dashboard-psychologist/settings"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all hover:font-semibold"
        )}
      >
        <IconSetting className="h-4 w-4" />
        Setting
      </Link>
      <AlertDialog>
        <AlertDialogTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-secondary-custom_secondary transition-all hover:text-primary">
          <IconSignOut className="h-4 w-4" />
          Sign Out
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Sign Out</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to exit this account?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Link href="/">
              <AlertDialogAction className="bg-red-500 text-white px-6 py-2 rounded-full">
                Sign Out
              </AlertDialogAction>
            </Link>
            <AlertDialogCancel className="bg-white text-black px-6 py-2 rounded-full">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
