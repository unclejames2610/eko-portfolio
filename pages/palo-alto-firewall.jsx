import Image from "next/image";
import React from "react";
import paloAltoImg from "../public/assets/projects/paloAlto.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const paloAltoFirewall = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={paloAltoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Palo Alto Firewall</h2>
          <h3>Vulnerable Linux/ Windows VM / Palo Alto Firewall</h3>
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
                <RiRadioButtonFill className="pr-1" /> Vulnerable Linux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Windows VM
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Palo Alto Firewall
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Subnet
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

export default paloAltoFirewall;
