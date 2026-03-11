const ProjectCard = ({ title, imageSrc, imageAlt }) => {
  return (
    <div>
      <span className="flex justify-center items-center font-bold text-xl text-gray-200 m-2">
        {title}
      </span>
      <div className="w-full h-100 object-fit">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="rounded-3xl drop-shadow-[0_0_11px_rgba(162,28,175,1)]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
