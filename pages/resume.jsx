import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='sm:text-center'>Oche Moses Eko (Meng | SC-900 | Security+)</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Cybersecurity Tools</span>
            <span className='px-2'>|</span>NMAP
            <span className='px-2'>|</span> Nessus
            <span className='px-2'>|</span>Snort
            <span className='px-2'>|</span>Tenable.io
            <span className='px-2'>|</span>Burp suite
            <span className='px-2'>|</span>Metasploitable
            <span className='px-2'>|</span>Wireshark
            <span className='px-2'>|</span>WhoIs
            <span className='px-2'>|</span>WhoAmI
          </p>

          <p className='py-2'>
            <span className='font-bold'>Operating System & Databases</span>
            <span className='px-2'>|</span>Linux (Kali)
            <span className='px-2'>|</span> Windows
            <span className='px-2'>|</span>Mac OS
          </p>

          <p className='py-2'>
            <span className='font-bold'>Programming</span>
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span> C/C++
          </p>

          <p className='py-2'>
            <span className='font-bold'>Network Protocols</span>
            <span className='px-2'>|</span>SSL
            <span className='px-2'>|</span> DNS
            <span className='px-2'>|</span>SSH
            <span className='px-2'>|</span>HTTPS
            <span className='px-2'>|</span>TCP/IP
            <span className='px-2'>|</span>IPSEC
            <span className='px-2'>|</span>ARP
          </p>

          <p className='py-2'>
            <span className='font-bold'>Other Software</span>
            <span className='px-2'>|</span>Visio
            <span className='px-2'>|</span> Microsoft Office Suites
            <span className='px-2'>|</span>UNMS (Ubiquiti Network Management System)
            <span className='px-2'>|</span>Visual Studio
            <span className='px-2'>|</span>Jupyter
           
          </p>

          <p className='py-2'>
            <span className='font-bold'>Security Standards and Practices</span>
            <span className='px-2'>|</span>ISO/IEC 27001/2
            <span className='px-2'>|</span> GDPR
            <span className='px-2'>|</span>PCI-DSS
            <span className='px-2'>|</span>HIPPA
            <span className='px-2'>|</span>NIST 800-53
           
          </p>
          <p className='py-2'>
            <span className='font-bold'>Professional skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> Data Security
            <span className='px-2'>|</span>Threat Detection
            <span className='px-2'>|</span> IOT Security
            <span className='px-2'>|</span>Incident Response
            <span className='px-2'>|</span>Security Monitoring
            <span className='px-2'>|</span>Vulnerability Management
            <span className='px-2'>|</span>Security Tool Management
            <span className='px-2'>|</span>Risk Assessment,
            <span className='px-2'>|</span>Penetration Testing
            <span className='px-2'>|</span> Network Security
            <span className='px-2'>|</span> Malware Analysis
          </p>
   
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Relevant Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Layer3 Limited
            </span>
            <span className='px-2'>|</span>Abuja, Nigeria
          </p>
          <p className='py-1 italic'>Infrastructure Services Engineer (Internship) (Jan 2023 – August 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Managing fiber optics network connectivity for 2500+ active clients.
            </li>
            <li>
            Analyzed, troubleshooted, and diagnosed internet downtime on Customer Premises Equipment (CPE) and provided prompt repair and restoration solutions. 
            </li>
            <li>
            Proactively Participated in the migration of Customer Relationship Management (CRM) from the Ubiquiti network management system platform to a more personalized and automated platform; 24online.
            </li>
            <li>
            Achieved the 1000 active subscribers’ milestone for the Fiber to The Home (FTTH) connectivity.
            </li>
            <li>
            Triumphed in the Future Young Innovators program organized annually for young new hires. It is aimed at identifying gaps and positively impacting the company’s growth. I improvised a means to provide a backup power supply to the CPEs.
            </li>
            <p className='pl-8 text-sm'>
            Positive Feedback Review: Deployment of the innovation was received warmly by customers. It received over 90% satisfaction review. 
            </p>
            <p className='pl-8 text-sm'>
            Revenue generation: The deployment of this innovation significantly increased the company’s revenue in the subsequent quarter report.
            </p>
            <li>
            Achieved the 1000 active subscribers’ milestone for the Fiber to The Home (FTTH) connectivity.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div> */}

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Relevant Certifications
        </h5>
      
        {/* certifications */}
        <div className='py-4'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Offensive Security Certified Practioner (OSCP) -in progress
            </li>
            <li>
            CompTIA Security+  -June 2023
            </li>
            <li>
            Introduction to Cybersecurity, Cisco  -May 2023
            </li>
            <li>
            Certified AppSec Practioner (CAP) -March 2023
            </li>
            <li>
            Microsoft Certified: Security, Compliance, and Identity Fundamentals -December 2022
            </li>
            <li>
            Wireshark for Basic Network Security Analysis -August 2022
            </li>
            <li>
            Diploma in Leadership Development -August 2022
            </li>
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Awards and Volunteer
        </h5>
      
        {/* awards and volunteer */}
        <div className='py-4'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            ICPC (Independent Corrupt Practices Commission) youth community development services group           -Nov 2022 - August 2023
            </li>
            <li>
            I4G Cybersecurity Scholarship  -April 2023 – August 2023
            </li>
            
          </ul>
        </div>

        
      </div>
    </>
  );
};

export default resume;
