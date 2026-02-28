import type { ReactNode } from "react";
import Footer from "../../components/Footer";
import SiteHeader from "../../components/SiteHeader";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900">
      <SiteHeader />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
