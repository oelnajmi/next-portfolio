"use client";

import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          About me
        </h2>
      </div>
      <h3 className="md:text-xl text-sm lg:text-xl font-extralight text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4">
        <p>
          {/* Update the introduction */}
          Hello, I&apos;m a passionate{" "}
          <span className="text-white font-medium">
            DevOps Engineer and Fullstack Developer
          </span>
          .
        </p>
        <p className="mt-6">
          With <span className="text-white font-medium">4 years </span>
          of experience, I specialize in{" "}
          <span className="text-white font-medium">
            web app development
          </span>{" "}
          and <span className="text-white font-medium">DevOps practices</span>.
        </p>
        <p className="mt-6">
          {/* Update technical expertise */}
          My technical expertise includes –{" "}
          <span className="text-white font-medium">TypeScript</span>,{" "}
          <span className="text-white font-medium">React ecosystems</span>,{" "}
          <span className="text-white font-medium">NodeJs</span>,{" "}
          <span className="text-white font-medium">
            {" "}
            Relational & Non-Relational Databases
          </span>
          , <span className="text-white font-medium">DevOps CI/CD</span>,{" "}
          <span className="text-white font-medium">cloud security</span>,{" "}
          <span className="text-white font-medium">infrastructure</span>,{" "}
          <span className="text-white font-medium">Java</span>,{" "}
          <span className="text-white font-medium">Angular</span>,{" "}
          <span className="text-white font-medium">Jenkins</span>, and{" "}
          <span className="text-white font-medium">Docker</span>.
        </p>
        <p className="mt-6">
          {/* Update current work */}
          Currently, I&apos;m contributing my skills to the{" "}
          <span className="text-white font-medium">
            Canada Revenue Agency
          </span>{" "}
          as a <span className="text-white font-medium">DevOps Engineer</span>.
          I&apos;m leading the transition of our project to adopt the Angular
          frontend framework and Maven, moving towards a more modern,
          microservice-based architecture. I am also responsible for automating
          deployments and migrations, and providing developer support to ensure
          they are free of any roadblocks.
        </p>
        <p className="mt-6">
          {/* Update passions and mindset */}
          I&apos;m passionate about building clean, efficient, and scalable
          systems that provide benefits to people. With an entrepreneurial
          mindset, I&apos;m always generating ideas and love working on projects
          that push the boundaries of technology.
        </p>
      </h3>
    </div>
  );
};

export default About;
