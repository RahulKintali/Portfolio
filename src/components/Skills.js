import { FaDatabase, FaPython, FaChartBar, FaTable, FaCloud, FaCode, FaRobot } from "react-icons/fa";
import { SiMicrosoftazure, SiTableau, SiSap, SiR, SiMicrosoftsqlserver } from "react-icons/si";

const skills = [
  { name: "SQL", icon: <SiMicrosoftsqlserver className="text-red-500" size={30} /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" size={30} /> },
  { name: "Power BI", icon: <FaChartBar className="text-blue-500" size={30} /> },
  { name: "Tableau", icon: <SiTableau className="text-indigo-500" size={30} /> },
  { name: "SAP IBP", icon: <SiSap className="text-green-500" size={30} /> },
  { name: "Azure Data Studio", icon: <SiMicrosoftazure className="text-blue-700" size={30} /> },
  { name: "ETL Pipelines", icon: <FaCloud className="text-gray-500" size={30} /> },
  { name: "Data Cleaning", icon: <FaDatabase className="text-purple-500" size={30} /> },
  { name: "Data Visualization", icon: <FaTable className="text-teal-500" size={30} /> },
  { name: "R", icon: <SiR className="text-blue-400" size={30} /> },
  { name: "Microsoft Excel", icon: <FaCode className="text-green-600" size={30} /> },
  { name: "Automation", icon: <FaRobot className="text-gray-700" size={30} /> }, // New Skill Added
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            {skill.icon}
            <span className="mt-3 text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
