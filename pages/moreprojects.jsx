import React from "react";
import ProjectItem from "../components/ProjectItem";
import portfolioImg from "../public/assets/projects/portfolio.png";
import penetrationImg from "../public/assets/projects/penetration.png";
import snortImg from "../public/assets/projects/snort.png";
import digitalForensicsImg from "../public/assets/projects/digitalForensics.png";
import paloAltoImg from "../public/assets/projects/paloAlto.png";
import iotWithSqlImg from "../public/assets/projects/iotWithSql.jpg";
import randomForestImg from "../public/assets/projects/randomForest.jpg";

const moreProjects = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 pt-[120px]">
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="E-Portfolio"
          backgroundImg={portfolioImg}
          projectUrl="/portfolio"
          tech="Next JS"
        />
        <ProjectItem
          title="Penetration Testing"
          backgroundImg={penetrationImg}
          projectUrl="/penetration"
          tech="Vulnerability Exploit, Password Cracking, File Exfiltration"
        />
        <ProjectItem
          title="Intrusion Detection/Prevention System"
          backgroundImg={snortImg}
          projectUrl="/snort"
          tech="Snort"
        />
        <ProjectItem
          title="Digital Forensics"
          backgroundImg={digitalForensicsImg}
          projectUrl="/digital-forensics"
          tech="FTK Imager"
        />
        <ProjectItem
          title="Firewall"
          backgroundImg={paloAltoImg}
          projectUrl="/palo-alto-firewall"
          tech="Palo Alto Firewall"
        />
        <ProjectItem
          title="IoT Tap Monitoring System"
          backgroundImg={iotWithSqlImg}
          projectUrl="/iot"
          tech="SQL"
        />
        <ProjectItem
          title="Network Intrusion Detection System"
          backgroundImg={randomForestImg}
          projectUrl="/random-forest"
          tech="Machine Learning Algorithm"
        />
      </div>
    </div>
  );
};

export default moreProjects;
