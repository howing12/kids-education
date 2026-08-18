import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Philosophy } from "@/components/philosophy";
import { Courses } from "@/components/courses";
import { Teachers } from "@/components/teachers";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Courses />
        <Teachers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
