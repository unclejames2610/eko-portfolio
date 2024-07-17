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
        <ProjectItem
          title="Palo Alto Firewall"
          backgroundImg={paloAltoImg}
          projectUrl="/palo-alto-firewall"
          tech="Palo Alto Firewall"
        />
        <ProjectItem
          title="IOT"
          backgroundImg={iotWithSqlImg}
          projectUrl="/iot"
          tech="SQL"
        />
        <ProjectItem
          title="Random Forest"
          backgroundImg={randomForestImg}
          projectUrl="/random-forest"
          tech="pandas, sklearn, numpy"
        />
      </div>
    </div>
  );
};

export default moreProjects;
