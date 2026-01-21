import kurt from "../../assets/kurtkårejohnny.jpg";
import ProjectCard from "./ProjectCard";

function ProjectContent() {
  const projects = [
    { title: "Kurt Kåre Johnny", imageSrc: kurt, imageAlt: "The legend" },
    { title: "Kurt Kåre Johnny", imageSrc: kurt, imageAlt: "The legend" },
    { title: "Kurt Kåre Johnny", imageSrc: kurt, imageAlt: "The legend" },
    { title: "Kurt Kåre Johnny", imageSrc: kurt, imageAlt: "The legend" },
    { title: "Kurt Kåre Johnny", imageSrc: kurt, imageAlt: "The legend" },
    { title: "Kurt Kåre Johnny", imageSrc: kurt, imageAlt: "The legend" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-content-evenly gap-10 mx-10 object-cover">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
        />
      ))}
    </div>
  );
}

export default ProjectContent;
