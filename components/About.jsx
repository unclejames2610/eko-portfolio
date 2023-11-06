import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I'm Oche, an Information Security Analyst dedicated to safeguarding digital landscapes. With a strong background in threat detection, vulnerability assessment, and incident response, I'm passionate about ensuring data confidentiality and integrity. I collaborate with cross-functional teams to fortify network security, implement policies, and maintain compliance. My commitment to ongoing learning and proactive security measures is aimed at making the digital world a safer place.
          </p>
          <p className='py-2 text-gray-600'>
          In my free time, I stay updated on the latest security technologies, engage in cybersecurity forums, and share knowledge with the community. I'm open to collaborations, knowledge-sharing, and discussions on enhancing digital security. Let's work together to strengthen the defenses of the digital realm and create a more secure cyberspace.
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
