import About from "@/components/about";
import Intro from "@/components/page";
import Projects from "@/components/projects"
import Skills from "@/components/skills";
import Contect from "@/components/contect";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-2">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contect />
    </main>
  );
}
