import React from "react";

const ProjectsCard = ({ icon, title, category, date, description }) => {
  return (
    <div className="w-full py-6 flex flex-col justify-start items-start border-b-[1px] border-b-zinc-800">
      {/* Icon Section */}
      <div className="w-12 h-12 mb-3 flex justify-center items-center bg-zinc-800 rounded-full">
        {icon}
      </div>

      {/* Title & Category */}
      <h3 className="font-titleFont text-lg font-semibold text-[#ccc] mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-400">{category}</p>
      <p className="text-xs text-gray-500 mb-2">{date}</p>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectsCard;
