import React from "react";
import { FaRobot, FaMicrochip, FaChartLine, FaSearch } from "react-icons/fa";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<FaRobot />}
        title="Machine Learning Solutions"
        subTitle="Leverage the power of AI to detect fraud, predict trends, and optimize business operations. With experience in building ML models using XGBoost and Spark MLlib, I provide data-driven insights for smarter decision-making."
      />
      <ServicesCard
        icons={<FaMicrochip />}
        title="IoT Development"
        subTitle="Develop and implement IoT solutions for real-time data monitoring and analysis. My expertise in MQTT, Azure IoT Hub, and data streaming enables seamless connectivity and intelligent automation."
      />
      <ServicesCard
        icons={<FaChartLine />}
        title="Data Analytics and Visualization"
        subTitle="Transform raw data into actionable insights using tools like Power BI and SQL. I specialize in building interactive dashboards that help businesses visualize trends and make informed decisions."
      />
      <ServicesCard
        icons={<FaSearch />}
        title="Web Development"
        subTitle="Create dynamic and responsive web applications using .NET MVC, JavaScript, and Node.js. From intuitive front-end design to robust back-end logic, I ensure a seamless user experience."
      />
    </div>
  );
};

export default MyServices;
