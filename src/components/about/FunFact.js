import React from "react";
import { GiWeightLiftingUp, GiMeal, GiHealthNormal } from "react-icons/gi";
import { FaRunning, FaHeartbeat, FaGamepad } from "react-icons/fa";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Fun Facts About Me 💡</h2>
      <p className="mb-8">When I'm not diving into tech projects, you'll probably find me at the gym or learning about fitness and health. Here are some fun facts about my fitness journey!</p>
      <div className="grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<GiWeightLiftingUp />} des="Gym enthusiast" />
<FunFactCard icon={<GiMeal />} des="I invest time into learning about nutrition" />
<FunFactCard icon={<FaRunning />} des="Often Endulge In Endurance Training" />
<FunFactCard icon={<FaGamepad />} des="Avid Gamer" />

      </div>
    </div>
  );
};

export default FunFact;
