import React from 'react'
import TechStackList from "./TechStackList";
import WebsiteMetricsList from "./WebsiteMetricsList";
import Button from "../UI/Button";

function ProjectItem({direction}) {

  return (
    <li>
      <div
        className={`flex flex-col gap-10 md:gap-20 lg:gap-48 md:${
          direction
        }`}
      >
        <div>
          <img
            className="w-full"
            src="/assets/images/portfolio-project-image.webp"
            alt=""
          />
        </div>
        <div className="text-primary flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary text-4xl font-serif tracking-tighter sm:text-5xl lg:text-6xl">
              Personal Portfolio
            </h3>
            <p className="text-secondary text-xl tracking-wider sm:text-2xl lg:text-3xl">
              Custom designed using figma and developed personal portfolio with
              a modern flair
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="text-2xl font-serif sm:text-3xl lg:text-4xl">
              Tech Stack
            </h4>
            <TechStackList />
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="text-2xl font-serif sm:text-3xl lg:text-4xl">
              Website Metrics
            </h4>
            <WebsiteMetricsList />
          </div>
          <div
            className={`text-primary mt-5 text-center flex flex-col gap-6 items-center sm:flex-row md:${
              direction
            } lg:gap-10`}
          >
            <Button variant="primary" href="https://www.google.com">
              Explore Site
            </Button>
            <Button variant="secondary" href="https://www.google.com">
              Source Code
            </Button>
          </div>
        </div>
      </div>
      <hr className="border border-secondary/40 my-16 md:my-20 lg:my-32" />
    </li>
  );
}

export default ProjectItem