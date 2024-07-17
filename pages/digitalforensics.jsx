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
          The goal of this digital forensics project was to uncover hidden evidence from a compromised system suspected of being used in illegal activities. The investigation focused on identifying hidden files, encrypted data, and steganographic content, as well as analyzing the system's volatile memory to extract critical information.
          </p>
          
          <p>
          FTK Imager: Created a bit-by-bit image of the suspect's hard drive to preserve the integrity of the original data. Conducted an initial file system analysis to identify suspicious files and directories.
          </p>
          <p>
          Encrypto: Used Encrypto to attempt decryption of these files, successfully recovering critical documents containing sensitive information related to the case.
          </p>
          <p>
          Quick Stego: Analyzed image and audio files for hidden data using Quick Stego. Discovered hidden messages within several image files, revealing communication logs and additional evidence of illicit activities.
          </p>
          <p>
          Volatility: Acquired a memory dump from the suspect's system and used Volatility to analyze it. Identified running processes, network connections, and registry entries. Extracted hidden processes and discovered malware that was not visible in the standard file system analysis. Reconstructed user activity, providing a timeline of actions taken on the system, which was crucial in understanding the suspect's behavior.
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
