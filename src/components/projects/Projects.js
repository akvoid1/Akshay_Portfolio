import React from "react";
import {
  FaSpotify,
  FaCreditCard,
  FaGlobe,
  FaCloud,
  FaBrain,
} from "react-icons/fa";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      {/* Section Title */}
      <Title title="Recent" subTitle="Projects" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10 px-6">
        {/* Project 1 - Spotify Insights */}
        <ProjectsCard
          icon={<FaCreditCard className="text-green-500 text-2xl" />}
          title="Transaction Simulation and List View | DOT net Framework, C, PostGreSQL and JavaScript"
          category="Web Devlopment"
          date="2024 May - 2024 july"
          description="Transaction Simulation and List View | DOT net Framework, C, PostGreSQL and JavaScript
• Developed a CRUD-based POS simulation website using .NET MVC
• Implemented frontend backend validation for accurate transaction input.
• Conducted software testing debugging, ensuring system reliability.
• Compared .NET and PHP for transaction processing and presented findings
"
        />

        {/* Project 2 - Credit Card Fraud Detection */}
        <ProjectsCard
          icon={<FaCreditCard className="text-red-500 text-2xl" />}
          title="Credit Card Fraud Detection"
          category="Machine Learning, Finance & DevOps"
          date="2025 - Ongoing"
          description="Guided under the mentorship from Worldline (Financial services company) - creating own ML model to flag the fraud card and interrupt the transaction in the middle where the communication is done with MQTT protocol."
        /> 

        {/* Project 4 - IoT Solution in Azure */}
        <ProjectsCard
          icon={<FaCloud className="text-blue-600 text-2xl" />}
          title="End-to-End IoT Solution for High-Velocity Smart Meter Data Analysis in Azure"
          category="IoT & Cloud"
          date="2024"
          description="Developed a lambda architecture to process high-velocity smart meter data in real-time using Azure IoT Hub, DPS, and Stream Analytics. Implemented long-term data storage with Azure Storage and advanced analytics through Azure Databricks, enabling insights and visualization for data-driven decision-making."
        />
      </div>
    </div>
  );
};

export default Projects;
