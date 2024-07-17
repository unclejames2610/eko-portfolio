import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import portfolioImg from "../public/assets/projects/portfolio.png";
import penetrationImg from "../public/assets/projects/penetration.png";
import snortImg from "../public/assets/projects/snort.png";
import digitalForensicsImg from "../public/assets/projects/digitalForensics.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
            tech="Next JS"
          />
          <ProjectItem
            title="Penetration Testing"
            backgroundImg={penetrationImg}
            projectUrl="/penetration"
            tech="ssh"
          />
          <ProjectItem
            title="Snort"
            backgroundImg={snortImg}
            projectUrl="/snort"
            tech="Snort, msfconsole"
          />
          <ProjectItem
            title="Digital Forensics"
            backgroundImg={digitalForensicsImg}
            projectUrl="/digital-forensics"
            tech="QuickStego"
          />
        </div>
        <Link
          href="/more-projects"
          className="text-[#5651e5] mt-10 cursor-pointer hover:font-semibold hover:underline w-fit"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
