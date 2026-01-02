import HeroContent from "./HeroContent";
import Button from "../shared/Button";

function HeroSection() {
  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center px-6 bg-bg overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-4xl bg-radial-[at_25%_25%] from-blue-800 to-teal-800 to-75% blur-3xl " />
      <HeroContent />
      <div>
        <Button variant="primary" size="medium">
          <a
            href="https://github.com/KnutMQS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
        <Button variant="primary" size="medium">
          E-Mail
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
