import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      {/* Experience Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2024 May - 2024 June"
          title="Software Developer Internship"
          subTitle="Worldline India Pvt Ltd"
          des={
            <ul className="list-disc ml-5">
              <li>Developed a CRUD-based POS simulation website using .NET MVC.</li>
              <li>Implemented frontend and backend validation for accurate transaction input.</li>
              <li>Conducted software testing and debugging, ensuring system reliability.</li>
              <li>Compared .NET and PHP for transaction processing and presented findings.</li>
            </ul>
          }
        />
          <ResumeCard
          badge="2025 - present"
          title="Student intern"
          subTitle="Worldline India Pvt Ltd"
          des="Working on a Real-Time Fraud Detection Model Using MQTT "
        />
      </div>

      {/* Vertical Divider */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Education Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2022 - Present"
          title="Shiv Nadar University Chennai"
          subTitle="CGPA 7.8/10"
          des="Courses Taken: Python, Java, Machine Learning, C"
        />
        <ResumeCard
          badge="2008 - 2022"
          title="St. Michael's Academy"
          subTitle="12th Grade (86.5%)"
        />
      </div>
    </div>
  );
};

export default Education;
