import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/data";

function ProjectContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    const isFirstProject = currentIndex === 0;
    const newIndex = isFirstProject ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextProject = () => {
    const isLastProject = currentIndex === projects.length - 1;
    const newIndex = isLastProject ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const project = projects[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center gap-8 mx-4">
      <div className="w-fit max-w-xl">
        <ProjectCard
          id={project.id}
          title={project.title}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
        />
      </div>
      <div className="flex justify-center items-center gap-8">
        <button
          onClick={prevProject}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50 transition-colors"
        >
          prev
        </button>
        <button
          onClick={nextProject}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50 transition-colors"
          aria-label="Next project"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default ProjectContent;
