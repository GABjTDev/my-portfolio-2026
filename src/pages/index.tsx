import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4 container-1280">
        <section id="about" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>Brief description about who you are...</p>
        </section>

        <section id="technologies" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Technologies</h2>
          <p>What technologies you use...</p>
        </section>

        <section id="projects" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p>Showcase of your projects...</p>
        </section>
      </main>
    </>
  );
}
