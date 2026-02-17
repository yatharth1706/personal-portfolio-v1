import React from "react";

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "August 2024",
    endDate: "Present",
    companyName: "Topo",
    jobTitle: "Senior Software Engineer",
    description: [
      "Spearheaded platform-wide UI redesign, delivering a modern, intuitive interface that boosted user satisfaction and reduced support tickets.",
      "Designed and launched end-to-end campaign creation flow, streamlining onboarding and slashing setup time for new campaigns.",
      "Built automatic phone-number enrichment, integrating third-party APIs to append contact data in real time and improve lead quality.",
      "Architected a notification system (Email & Slack) to surface key events instantly, increasing engagement and response rates.",
      "Led HubSpot CRM integration, enabling seamless two-way data sync and 360° engagement tracking.",
      "Released Master Inbox, empowering users to view and reply to all lead conversations in one place, driving workflow efficiency.",
      "Engineered dynamic AI-driven messaging snippets using prompt engineering, personalizing outreach at scale and boosting open rates.",
    ],
  },
  {
    startDate: "December 2023",
    endDate: "August 2024",
    companyName: "Artisan AI",
    jobTitle: "Senior Software Engineer",
    description: [
      "Spearheaded the integration of multiple CRMs including HubSpot and Salesforce into the platform, enhancing lead management efficiency.",
      "Achieved a remarkable 99% improvement in email deliverability through meticulous optimization strategies.",
      "Implemented advanced techniques to enhance email quality and refine email filtering mechanisms, resulting in a more streamlined communication process.",
      "Developed comprehensive analytics infrastructure, enabling real-time monitoring and analysis of all lead and email-related activities within the platform.",
    ],
  },
  {
    startDate: "June 2023",
    endDate: "December 2023",
    companyName: "LeadSquared",
    jobTitle: "Senior Software Engineer",
    description: [
      "Automated release pipeline that helps faster releases and 100% efficiency.",
      "Automated Region Setup Infra for LeadSquared to create all its infra in new region on requirement basis. Automating it via Terraform, AWS, RDS, Powershell scripts.",
    ],
  },
  {
    startDate: "June 2021",
    endDate: "June 2023",
    companyName: "LeadSquared",
    jobTitle: "Software Engineer",
    description: [
      "Part of DevOps Portal team which helps in automating infra management of LeadSquared",
      "Automated RDS Cluster upgrade / downgrade activity with very less downtime around 1-10 seconds in production",
      "Devised notification system for the platform supporting both web and email notifications on based of certain actions custom selected by user",
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-4 -z-10">
      <h2 className="section-title">Work Experience</h2>

      <ol className="relative border-s border-slate-200 dark:border-slate-700">
        {workExperienceData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === workExperienceData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute mt-1.5 h-3 w-3 -start-1.5 rounded-full border border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {item.jobTitle} at {item.companyName}
            </h3>
            <details
              open={index === 0}
              className="mb-4 mt-2 rounded-lg border border-slate-200/80 p-3 dark:border-slate-700/80"
            >
              <summary className="cursor-pointer text-sm font-semibold text-slate-700 dark:text-slate-200">
                View highlights
              </summary>
              <div className="mt-3 text-base font-normal text-slate-700 dark:text-slate-300">
                <ul className="ml-5 list-outside list-disc space-y-1">
                  {item.description.map((desc, innerIndex) => (
                    <li key={innerIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </details>
            {item.companyLink && (
              <a
                href={item.companyLink}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
