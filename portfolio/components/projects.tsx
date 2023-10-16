"use client";
import React from "react";
import SectionHeading from "./section-heaading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <div>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
