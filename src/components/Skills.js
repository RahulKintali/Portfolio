const Skills = () => {
  const skills = [
    "SQL", "Python", "Power BI", "Tableau", "SAP IBP", "Azure Data Studio",
    "ETL Pipelines", "Data Cleaning", "Data Visualization", "R", "Microsoft Excel"
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-3 border rounded shadow-md text-center">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
