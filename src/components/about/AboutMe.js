import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Akshay Benedict PJ</h2>
          <p className="text-base leading-6 ">
          I'm a Computer Science (IoT) student at Shiv Nadar University, Chennai, passionate about AI and Machine Learning. 
          With experience in Python, Java, and SQL, I enjoy solving complex problems through innovative solutions. 
          I’m a quick learner who thrives in collaborative environments and loves applying technology to make a real-world impact.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            India
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Tamil Nadu, Chennai
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
