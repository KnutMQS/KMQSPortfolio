import HeroContent from "./HeroContent";

function HeroSection() {
  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center px-6 bg-bg overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-31 h-31 rounded-4xl bg-radial-[at_25%_25%] from-violet-500 to-fuchsia-500 to-75% blur-3xl " />
      <HeroContent />
    </section>
  );
}

export default HeroSection;
