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
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Education</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {EducationData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === EducationData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.courseName} at {item.collegeName || item.schoolName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.address}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
