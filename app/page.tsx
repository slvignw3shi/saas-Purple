import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Partners from "@/components/partners";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <Hero />
      <Partners />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
