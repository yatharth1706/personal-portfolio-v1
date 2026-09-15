import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yatharth Verma — Classic portfolio",
  description: "Previous version of Yatharth Verma's portfolio.",
};

export default function ClassicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="classic-root min-h-screen">
      <div className="relative z-30 bg-slate-900 px-4 py-2 text-center text-sm text-slate-100">
        You&apos;re viewing the previous portfolio.{" "}
        <Link href="/" className="font-medium underline underline-offset-2">
          Go to the current site
        </Link>
      </div>
      {children}
    </div>
  );
}
