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
              href='https://www.linkedin.com/in/oche-eko/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/OcheEko'
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
              Proven Leadership <span className='px-1'>|</span> Information Security Analysis{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Information Security Analysis</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        As an Information Security Analyst, I bring a wealth of experience in customer service, team leadership, and organizational effectiveness, all within fast-paced and challenging security environments. My expertise lies in developing robust security strategies, streamlining operations, and fostering collaboration among teams. I possess diverse analytical skills and excel in relationship building. With a proven track record, I am a consummate professional and motivated leader known for solid interpersonal abilities, complex problem-solving skills, critical thinking, and the generation of innovative security solutions, ultimately optimizing security efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Cybersecurity Tools:</span>
            <span className='px-2'>|</span>Wireshark
            <span className='px-2'>|</span>Nessus
            <span className='px-2'>|</span>Nmap
            <span className='px-2'>|</span>SIEM
            <span className='px-2'>|</span>SOAR
            <span className='px-2'>|</span>Snort(IPS/IDS)
            <span className='px-2'>|</span>Palot Alto Firewall
            <span className='px-2'>|</span>Hydra
            <span className='px-2'>|</span>Zenmap
            <span className='px-2'>|</span>Antivirus
            <span className='px-2'>|</span>VirusTotal
            <span className='px-2'>|</span>FTK Imager(Forensics Toolkit)
            <span className='px-2'>|</span>Volatility
            <span className='px-2'>|</span>QuickStego
            <span className='px-2'>|</span>Putty
            <span className='px-2'>|</span>Tenable.io
            <span className='px-2'>|</span>Burp suite
            <span className='px-2'>|</span>Metasploitable
            <span className='px-2'>|</span>WhoIs
            <span className='px-2'>|</span>WhoAmI.
          </p>

          <p className='py-2'>
            <span className='font-bold'>Endpoint Detetction and Response (EDR):</span>
            <span className='px-2'></span>Microsoft Defender for Endpoint
            <span className='px-2'>|</span>Crowdstrike.
          </p>  

          <p className='py-2'>
            <span className='font-bold'>Cloud:</span>
            <span className='px-2'>|</span>Azure Sentinel
            <span className='px-2'>|</span>Azure AD (Active Directory)
            <span className='px-2'>|</span>Microsoft Entra ID
            <span className='px-2'>|</span>SSO
            <span className='px-2'>|</span>Microsoft Intune
            <span className='px-2'>|</span>Azure Security Center
            <span className='px-2'>|</span>Azure Policy
            <span className='px-2'>|</span>Azure CosmosDB
            <span className='px-2'>|</span>Azure DataBricks.
          </p>

          <p className='py-2'>
            <span className='font-bold'>Operating System & Platforms:</span>
            <span className='px-2'></span>Linux (Kali)
            <span className='px-2'>|</span>Windows
            <span className='px-2'>|</span>Mac OS
            <span className='px-2'>|</span>MySQL
            <span className='px-2'>|</span>VMWare
            <span className='px-2'>|</span>VirtualBox
          </p>

          <p className='py-2'>
            <span className='font-bold'>Programming:</span>
            <span className='px-2'></span>Python
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>KQL
            <span className='px-2'>|</span>Powershell
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
          </p>

          <p className='py-2'>
            <span className='font-bold'>Networking:</span>
            <span className='px-2'></span>OSI Model
            <span className='px-2'>|</span>SSH
            <span className='px-2'>|</span>Switching
            <span className='px-2'>|</span>Access Points
            <span className='px-2'>|</span>WAN/LAN
            <span className='px-2'>|</span>DNS
            <span className='px-2'>|</span>DHCP
            <span className='px-2'>|</span>NAT
            <span className='px-2'>|</span>ARP
            <span className='px-2'>|</span>FTP
            <span className='px-2'>|</span>HTTPS
            <span className='px-2'>|</span>TCP/IP
            <span className='px-2'>|</span>IPSEC
            <span className='px-2'>|</span>ARP
          </p>

          <p className='py-2'>
            <span className='font-bold'>Other Software:</span>
            <span className='px-2'></span>Office365 (SharePoint, PowerPoint, Excel, Outlook, Word, OneDrive, Teams)
            <span className='px-2'>|</span>ServiceNow
            <span className='px-2'>|</span>Atlassian(Jira,Bit Bucket, Confluence)
            <span className='px-2'>|</span>Visual Studio Code
            <span className='px-2'>|</span>Visio
            <span className='px-2'>|</span>Network Management System(Ubiquiti)
            <span className='px-2'>|</span>Visual Studio
            
          </p>

          <p className='py-2'>
            <span className='font-bold'>Security Standards and Practices</span>
            <span className='px-2'></span>ISO/IEC 27001/2
            <span className='px-2'>|</span>MITRE ATTACK
            <span className='px-2'>|</span>GDPR
            <span className='px-2'>|</span>PCI-DSS
            <span className='px-2'>|</span>Cyber Kill Chain
            <span className='px-2'>|</span>NIST 800-53      
          </p>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Vulnerability Management
            <span className='px-2'>|</span>Triage
            <span className='px-2'>|</span>Security Operations
            <span className='px-2'>|</span>Threat Detection
            <span className='px-2'>|</span>Threat Hunting
            <span className='px-2'>|</span>Cyber Forensics
            <span className='px-2'>|</span>Incident Response (IR)
            <span className='px-2'>|</span>Security Monitoring
            <span className='px-2'>|</span>Security Tool Management
            <span className='px-2'>|</span>Risk Assessment
            <span className='px-2'>|</span>Penetration Testing
            <span className='px-2'>|</span>Network Security
            <span className='px-2'>|</span>Network Analysis
            <span className='px-2'>|</span>Malware Analysis
            <span className='px-2'>|</span>Troubleshooting
            <span className='px-2'>|</span>Root Cause Analysis.
          </p>
   
          <p className='py-2'>
            <b><span className='font-bold'>Soft Skills:</span> </b>
            <b><span className='px-2'></span>Teamwork</b>
            <b><span className='px-2'>|</span>Patience</b>
            <b><span className='px-2'>|</span>Motivation</b>
            <b><span className='px-2'>|</span>Active Listening</b>
            <b><span className='px-2'>|</span>Positivity</b>
            <b><span className='px-2'>|</span>Focus.</b>
          </p>  


        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          RELEVANT EXPERIENCES
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            University of Victoria
            </span>
            <span className='px-2'>|</span>BC, Canada
          </p>
          <p className='py-1 italic'>Cybersecurity/Technical Support Projects (Sept 2023 – Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Deployed Snort in IDS mode on a local test subnet, defining rules to detect an EternalBlue attack from msfconsole performed on a vulnerable Windows VM
            </li>
            <li>
            Simulated Penetration Testing where I gained remote access into a local network of VMs. I also used Putty to establish a remote session to a vulnerable windows VM and successfully exfiltrated files. Performed reconnaissance on the target with Nmap and Nessus, exploited the discovered vulnerabilities using msfconsole and established a remote session from which I brute forced the users on the network using hydra. I successfully escalated privilege and exfiltrated some data using sftp.   
            </li>
            <li>
            Demonstrated a simple firewall implementation using Palo Alto firewall on a local network of VMs. I implemented NAT rules to guard internal subnet from the external, Allow/Deny rules to drop communication to specific websites (Facebook and porn sites), and rules to drop intercommunication of the VMs on the same local network by denying ICMP packets. 
            </li>
            <li>
            Developed an Internet of Things (IoT) tap monitoring system using a MySQL database. Used python programming to simulate the system and push/pull the tap status data to and from the database and display the status output on the local terminal. 
            </li>
          </ul>
        </div>


        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Layer3 Limited
            </span>
            <span className='px-2'>|</span>Abuja, Nigeria
          </p>
          <p className='py-1 italic'>Infrastructure Support (Sept 2022 – August 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Performed vulnerability assessments with Nessus, identifying and mitigating potential security threats across enterprise network.
            </li>
            <li>
            Served as a Triage Analyst for incident response, prioritizing and managing security incidents to ensure timely resolution and minimal impact. 
            </li>
            <li>
            Performed in-depth analysis to determine file legitimacy, leveraging OSINT tools like VirusTotal and Any.Run Sandbox, enhancing threat detection and response capability.
            </li>
            <li>
            Revised the access control policy for the LAN in accordance with ISO/IEC 27001 and implemented the MAC-based access control to the network which I primarily managed.
            </li>
            <li>
            Utilized Wireshark and TCPDUMP to analyze network packets (.pcap, .dmp, .cap), isolating anomalous network traffic and examining packets to uncover and address security anomalies.
            </li>
            <li>
            Reviewed and updated the risk assessment documentation for all the assets on the internal network of the company.
            </li>
            <li>
            Proactive network monitoring and analysis in the NOC (Network Operation Center) for over 2000 active clients on the fiber optic network leading to a manager’s recognition and award for excellence in client internet uptime. 
            </li>
            <li>
            Provided tier 1 and tier 2 support to the clients in occurrences of network downtime or CRM (Customer Relationship Management) issues relating to billing and invoicing.
            </li>
            <li>
            Utilized ServiceNow for tracking and managing IT service requests, incidents, and changes. Ensured timely resolution of tickets and maintained detailed records of support activities.
            </li>
          
          </ul>
        </div>


        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Covenant University
            </span>
            <span className='px-2'>|</span>Ogun, Nigeria
          </p>
          <p className='py-1 italic'>Lab Technical Support (Sept 2018 – Aug 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Provided comprehensive support and troubleshooting to lab IT assets like printers, scanners, CCTV, hard drives, and RAM. 
            </li>
            <li>
            Configured, Installed and maintained application packages such as Microsoft office 365, Slack, Zoom, AutoCAD, MATLAB  
            </li>
            <li>
            Performed regular maintenance to the lab computer OS and softwares, ensuring they were updated and functionally available for use always. 
            </li>
          
          </ul>
        </div>


        <h5 className='text-center underline text-[18px] py-4'>
          EDUCATION
        </h5>
      
        {/* education */}
        <div className='py-4'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            <b>University of Victoria, BC, Canada.</b>
            </li>
            <p className='pl-1 text-sm'>
             <b>Master of Engineering, Telecommunication and Information Security.</b>
            </p>
            <li>
            <b>Covenant University, Ogun, Nigeria.</b>
            <p className='pl-1 text-sm'>
            <b>Bacholor of Engineering, Electrical and Electronics Engineering.</b>
            </p>
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
          RELEVANT CERTIFICATIONS
        </h5>
      
        {/* certifications */}
        <div className='py-4'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Microsoft Certified: Security Engineer Associate -in progress
            </li>
            <li>
            Microsoft Certified: Azure Fundamentals (AZ-900) -May 2024
            </li>
            <li>
            CompTIA Security+  -June 2023
            </li>
            <li>
            Cisco: Introduction to Cybersecurity  -May 2023
            </li>
            <li>
            SecOps Group: Certified AppSec Practioner (CAP) -March 2023
            </li>
            <li>
            Microsoft Certified: Security, Compliance, and Identity Fundamentals(SC-900) -December 2022
            </li>
            <li>
            Wireshark for Basic Network Security Analysis -August 2022
            </li>
          </ul>
        </div>

        
      </div>
    </>
  );
};

export default resume;
