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
          <h2 className='py-4'>Who AM I?</h2>
          <p className='py-2 text-gray-600'>
          I&apos;m Oche Eko, an Information Technology Practitioner with specialization in Information Security and IT/Technical Support. With a strong background in threat detection, vulnerability assessment, and incident response, I&apos;m passionate about ensuring optimum organization security posture and safety of IT assets. I collaborate with cross-functional teams to maintain IT infrastructure, implement policies, and maintain compliance. My commitment to ongoing learning and proactive security measures is aimed at making the digital world a safer place.
          </p>
          <p className='py-2 text-gray-600'>
          I have a dedidcation to contnuous learning and staying updated with the latest trends in information technology. I&apos;m an active team player in collaborative environments, knowledge-sharing, and have proven success in work efficiency. Let&apos;s work together to innovatively strengthen and ensure sustained productivity in your company IT infrastructure.
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
