import About from "@/components/About";
import Boot from "@/components/Boot";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Numbers from "@/components/Numbers";
import Rail from "@/components/Rail";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Boot />
      <Rail />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Numbers />
        <Work />
        <Courses />
        <Contact />
      </main>
    </>
  );
}
