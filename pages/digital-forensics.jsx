import Image from "next/image";
import React from "react";
import digitalForensicsImg from "../public/assets/projects/digitalForensics.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const digitalForensics = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={digitalForensicsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Digital Forensics</h2>
          <h3>QuickStego/ Encrypto / FTK Imager</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I simulated Penetration Testing where I gained remote access into a
            local network of VMs. I also used Putty to establish a remote
            session to a vulnerable windows VM and successfully exfiltrated
            files. Performed reconnaissance on the target with Nmap and Nessus,
            exploited the discovered vulnerabilities using msfconsole and
            established a remote session from which I brute forced the users on
            the network using hydra. I successfully escalated privilege and
            exfiltrated some data using sftp.
          </p>
          {/* <a
            href="https://github.com/unclejames2610/eko-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://eko-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> QuickStego
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Encrypto
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> FTK Imager
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Volatility
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default digitalForensics;
