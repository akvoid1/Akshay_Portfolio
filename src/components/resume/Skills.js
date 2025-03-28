import React from "react";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-500"}>
          ★
        </span>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-10 px-6">
      {/* =============== Languages Start here =================== */}
      <div>
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">
          {/* English */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">English</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Tamil */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Tamil</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      {/* =============== Coding Start here =================== */}
      <div>
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        <div className="py-4">
          {[
            { name: "Python", rating: 3.5 },
            { name: "SQL", rating: 4 },
            { name: "C", rating: 3 },
            { name: "Java", rating: 4 },
          ].map((lang) => (
            <div key={lang.name} className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-base text-textColor -mb-1.5">{lang.name}</p>
              <StarRating rating={lang.rating} />
            </div>
          ))}
        </div>
      </div>

      {/* =============== Soft Skills Start here =================== */}
      <div>
        <ResumeTitle title="Soft Skills" icon={<IoIosPaper />} />
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
          <li className="text-textColor">Communication</li>
          <li className="text-textColor">Problem-Solving</li>
          <li className="text-textColor">Time Management</li>
          <li className="text-textColor">Adaptability</li>
        </ul>
      </div>

      {/* =============== Tech Skills =================== */}
      <div className="col-span-3">
        <ResumeTitle title="Tech Skills" icon={<IoIosPaper />} />
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Skill Set with Subheadings */}
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Languages & Databases</h3>
            Java, Python, C, SQL (PostgreSQL), HTML/CSS, R
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Cloud Platforms</h3>
            Azure (IoT Hub, Stream Analytics, Storage)
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Tools & Technologies</h3>
            Power BI, MQTT, HTML5, CSS, Node.js, React.js
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Web-Dev</h3>
            ASP.NET MVC
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Azure Services</h3>
            Azure IoT Hub, Device Provisioning Service, Stream Analytics, Azure Storage, Databricks, Azure Web Services, Azure Server Hosting, Bastion, Azure Firewall & DNAT Config, IaaS, PaaS, SaaS, Azure PowerShell
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
