import HeroContent from "./HeroContent";
import Button from "../shared/Button";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col max-h-screen h-fit items-center justify-center px-6 pt-20 bg-bg overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-51 h-51 rounded-4xl bg-radial-[at_25%_25%] from-blue-800 to-teal-800 to-75% blur-3xl" />
      <HeroContent />
      <div className="mt-4">
        <a
          href="https://github.com/KnutMQS/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bg border-2 border-violet-500 hover:bg-gray-200 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset-2 focus-visible:ring-blue-600 px-4 py-2 text-sm m-2 font-semibold rounded-full transition ease-in-out duration-150"
        >
          GitHub
        </a>
        <Button variant="primary" size="medium">
          E-Mail
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
