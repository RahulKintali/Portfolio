const Experience = () => {
  const experiences = [
    {
      role: "Data Analyst",
      company: "Argano, Plano, TX",
      period: "May 2024 – Jan 2025",
      tasks: [
        "Developed 20+ Power BI dashboards to track key business metrics.",
        "Automated SQL-based ETL pipelines, reducing processing time by 30%.",
        "Optimized SQL queries, improving reporting speed by 40%."
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "Argano, Plano, TX",
      period: "Aug 2023 – May 2024",
      tasks: [
        "Designed Power BI dashboards for risk and financial metrics.",
        "Automated data extraction, reducing manual effort by 50%.",
        "Developed ETL workflows, increasing efficiency by 30%."
      ]
    },
    {
      role: "Data Analyst",
      company: "Cognizant (Client: Novartis Pharmaceuticals), India",
      period: "Oct 2020 – Aug 2022",
      tasks: [
        "Automated data pipelines using SAP BW/4HANA and SQL.",
        "Developed Tableau dashboards for $500M+ assets.",
        "Implemented SAP IBP forecasting models, improving efficiency by 30%."
      ]
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
          <p className="text-gray-600">{exp.period}</p>
          <ul className="list-disc pl-6 mt-2">
            {exp.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
