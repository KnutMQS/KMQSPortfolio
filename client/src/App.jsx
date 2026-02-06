import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import ProjectsMain from "./components/projects/ProjectsMain";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-0.5">
        <HeroSection />
        <ProjectsMain />
      </main>
    </>
  );
}

export default App;
