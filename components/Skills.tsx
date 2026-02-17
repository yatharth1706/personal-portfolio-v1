import React from "react";

const skillsData = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "AWS",
  "Python",
  "FastAPI",
  "RESTful APIs",
];

function Skills() {
  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="section-title">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
