import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth"; // Pastikan auth adalah fungsi yang mengembalikan session

export async function middleware(req: NextRequest) {
    const session = await auth(); // Ambil session pengguna
    const { pathname } = req.nextUrl;

    // Halaman yang tidak perlu dicek untuk redirect (hindari loop)
    const isSignInPage = pathname === "/signin";
    const isAdminDashboard = pathname === "/dashboard"; // Pengecekan khusus untuk "/dashboard" saja
    const isPatientDashboard = pathname.startsWith("/dashboard-patient");
    const isPsychologistDashboard = pathname.startsWith("/dashboard-psychologist");

    // Jika user belum login dan mengakses halaman selain /signin, redirect ke /signin
    if (!session?.user && !isSignInPage) {
        return NextResponse.redirect(new URL("/signin", req.url));
    }

    // Jika user sudah login dan berada di halaman /signin, redirect ke dashboard sesuai role
    if (isSignInPage && session?.user) {
        if (session.user.role === "admin") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        } else if (session.user.role === "patient") {
            return NextResponse.redirect(new URL("/dashboard-patient", req.url));
        } else if (session.user.role === "psychologist") {
            return NextResponse.redirect(new URL("/dashboard-psychologist", req.url));
        }
    }

    // Jika user login dan mengakses dashboard yang tidak sesuai, redirect ke dashboard yang benar
    if (session?.user) {
        const role = session.user.role;

        // Admin hanya boleh mengakses /dashboard, redirect jika mengakses halaman lain
        if (role === "admin" && !isAdminDashboard) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

        // Patient hanya boleh mengakses /dashboard-patient, redirect jika mengakses halaman lain
        if (role === "patient" && !isPatientDashboard) {
            return NextResponse.redirect(new URL("/dashboard-patient", req.url));
        }

        // Psychologist hanya boleh mengakses /dashboard-psychologist, redirect jika mengakses halaman lain
        if (role === "psychologist" && !isPsychologistDashboard) {
            return NextResponse.redirect(new URL("/dashboard-psychologist", req.url));
        }
    }

    return NextResponse.next();
}


export const config = {
  matcher: [
    "/signin", 
    "/dashboard", 
    "/dashboard-patient/:path*", 
    "/dashboard-psychologist/:path*"
  ],
};
