import ProjectCard from "./ProjectCard";
import projects from "../../data/data";

function ProjectContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-content-evenly gap-10 mx-10 object-cover">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          id={project.id}
          title={project.title}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
        />
      ))}
    </div>
  );
}

export default ProjectContent;
