import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: (
        <Image
          src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/original/9f1a7c3c-ec48-4936-a080-16a8e033970c.png"
          alt="cra-logo"
          width={200}
          height={60}
        />
      ),
      duration: "2023 – Present",
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl  text-white mb-6 flex items-end">
              <span className="font-bold">DevOps Engineer</span>
              <span className="text-gray-600 text-base ml-2 align-bottom">
                (July 2020 – Present)
              </span>
            </h1>

            {/* <div className="text-md text-gray-400">
              <span className="text-white font-medium">The Adecco Group</span>{" "}
              is a global{" "}
              <span className="font-medium text-white">
                HR solutions company
              </span>{" "}
              that provides{" "}
              <span className="font-medium text-white">
                workforce solutions
              </span>
              , including{" "}
              <span className="font-medium text-white">recruitment</span>,{" "}
              <span className="font-medium text-white">temporary staffing</span>
              ,{" "}
              <span className="font-medium text-white">career transition</span>,{" "}
              <span className="font-medium text-white">talent development</span>
              , and{" "}
              <span className="font-medium text-white">
                outsourcing services
              </span>{" "}
              to businesses across various industries.
            </div> */}
            <div className="text-md text-gray-400 mt-8">
              {/* <p>
                At <span className="text-white font-medium">Adecco Group</span>,
                I contribute to the development of the{" "}
                <span className="font-medium text-white">Adecco India app</span>{" "}
                and the{" "}
                <span className="font-medium text-white">global web app</span>,
                while also managing critical DevOps responsibilities:
              </p> */}
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <span className="font-medium text-white">
                    Infrastructure Management & Optimization:
                  </span>{" "}
                  Managed 40 WebLogic demo servers, providing production-like
                  environments for development and testing. Developed and
                  maintained CI/CD pipelines for seamless integration and
                  deployment, optimizing resource use for cost-effectiveness.
                </li>
                <li>
                  <span className="font-medium text-white">
                    CI/CD Pipeline Automation:
                  </span>{" "}
                  Automated build, deployment, and migration processes using
                  Jenkins, Maven, and Infrastructure as Code (IaC) principles,
                  reducing manual intervention by 80%.
                </li>
                <li>
                  <span className="font-medium text-white">
                    SOC Compliance & Security:
                  </span>{" "}
                  Applied and facilitated SOC compliance and security best
                  practices, contributing to secure and compliant infrastructure
                  across the project.
                </li>
                <li>
                  <span className="font-medium text-white">
                    Backend Integration & API Management:
                  </span>{" "}
                  Guided developers in integrating Angular frontends with Java
                  backends, ensuring secure and efficient API communication.
                </li>
                <li>
                  <span className="font-medium text-white">
                    Team Training & Knowledge Sharing:
                  </span>{" "}
                  Conducted training sessions on DevOps tools, security
                  practices, and infrastructure management to enhance team
                  productivity.
                </li>
                <li>
                  <span className="font-medium text-white">
                    DevOps Transformation Leadership:
                  </span>{" "}
                  Led the transition from an Ant-based monolithic project to a
                  Maven-based multi-module pipeline, cutting build times by 50%
                  and improving code maintainability.
                </li>
                <li>
                  <span className="font-medium text-white">
                    Production Support:
                  </span>{" "}
                  Played a critical role in production deployments, quickly
                  resolving issues to minimize downtime and ensure smooth
                  operations.
                </li>
                <li>
                  <span className="font-medium text-white">
                    Developer Tooling & Automation:
                  </span>{" "}
                  Developed internal tools, including log parsers, automation
                  scripts, and peer review analysis tools, enhancing developer
                  productivity.
                </li>
              </ul>
              <p className="mt-4">
                Additionally, I developed a{" "}
                <span className="font-medium text-white">
                  white-label solution
                </span>{" "}
                to streamline the candidate onboarding process, enhancing user
                experience and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          Experience
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
