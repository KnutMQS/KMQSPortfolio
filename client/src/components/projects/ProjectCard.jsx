const ProjectCard = ({ title, imageSrc, imageAlt }) => {
  return (
    <div>
      <span className="flex justify-center items-center font-bold text-xl text-gray-200 m-2">
        {title}
      </span>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-auto h-auto rounded-3xl drop-shadow-[0_0_11px_rgba(162,28,175,1)]"
      />
    </div>
  );
};

export default ProjectCard;
