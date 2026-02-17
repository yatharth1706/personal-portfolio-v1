import React from "react";

interface EducationItem {
  startDate: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
}

const EducationData: EducationItem[] = [
  {
    startDate: "August 2017",
    endDate: "May 2021",
    collegeName: "Lovely Professional University",
    courseName: "BTech. in Computer Science and Engineering",
    address: "Phagwara, Punjab",
  },
  {
    startDate: "2015",
    endDate: "2017",
    schoolName: "Snower Valley Senior Secondary School",
    address: "Bajaura, Himachal Pradesh",
    courseName: "Non Medical",
  },
];

const Education: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-4 -z-10">
      <h2 className="section-title">Education</h2>

      <ol className="relative border-s border-slate-200 dark:border-slate-700">
        {EducationData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === EducationData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute mt-1.5 h-3 w-3 -start-1.5 rounded-full border border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {item.courseName} at {item.collegeName || item.schoolName}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {item.address}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
