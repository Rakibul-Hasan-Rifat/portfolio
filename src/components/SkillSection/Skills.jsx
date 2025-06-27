import { useEffect, useState } from "react";
import SkillSection from "./SkillSection";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setSkills(jsonData.skills);
        console.log(jsonData.skills[0].frontend);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section id="skills" className="py-20 bg-[#252525] text-white rounded-xl">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">Tech Stack</h1>
      <SkillSection title="Frontend" items={skills[0]?.frontend} />
      <SkillSection title="Backend" items={skills[1]?.backend} />
      <SkillSection title="Tools" items={skills[2]?.tools} />
    </section>
  );
};

export default Skills;
