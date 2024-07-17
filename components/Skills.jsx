import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Python from "../public/assets/skills/pythonImage.png";
import Cplusplus from "../public/assets/skills/cLogo.png";
import Bash from "../public/assets/skills/bashLogo.png";
import AWS from "../public/assets/skills/aws.png";
import cybersecurityLogo from "../public/assets/skills/cybersecurityLogo.png";
import linuxLogo from "../public/assets/skills/linuxLogo.png";
import azurelogo from "../public/assets/skills/azurelogo.png";
import threathunting from "../public/assets/skills/threathunting.png";
import nessus from "../public/assets/skills/nessus.png";
import networkanalysis from "../public/assets/skills/networkanalysis.png";
import troubleshooting from "../public/assets/skills/troubleshooting.png";
import pentest from "../public/assets/skills/pentest.png";
import edr from "../public/assets/skills/edr.png";
import github1 from "../public/assets/skills/github1.png";
import office365 from "../public/assets/skills/office365.png";
import programmingImage from "../public/assets/skills/programmingImage.png";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 mb-12">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Python} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={edr} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Endpoint Detection & Response</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={programmingImage} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Powershell</h3>
              </div>
            </div>
          </div>

          <SkillsItem image={office365} skill="Office365" />
          <SkillsItem image={nessus} skill="Vulnerability Management" />
          <SkillsItem image={threathunting} skill="Threat Hunting & Detection" />
          <SkillsItem image={networkanalysis} skill="Network Analysis & Monitoring" />
          <SkillsItem image={cybersecurityLogo} skill="Cybersecurity" />
          <SkillsItem image={pentest} skill="Penetration Testing" />
          <SkillsItem image={programmingImage} skill="Risk Assessment" />
          <SkillsItem image={azurelogo} skill="Cloud: Microsoft Azure Services" />
          <SkillsItem image={linuxLogo} skill="Windows | Linux | Mac OS| SQL | VM" />
          <SkillsItem image={github1} skill="GitHub" />
          <SkillsItem image={troubleshooting} skill="Troubleshooting" />
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div> */}
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div> */}
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div> */}
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div> */}
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
