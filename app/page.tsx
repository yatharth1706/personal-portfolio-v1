import { HomePage } from "@/components/v2/home-page";
import { SiteHeader } from "@/components/v2/site-header";

export default function Home() {
  return (
    <main className="v2-root min-h-screen">
      <SiteHeader />
      <HomePage />
    </main>
  );
}
