// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <div className="glass-card p-6 rounded-xl">
            <p className="text-gray-200 text-sm lg:text-lg">
              {personalData.description}
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2 ">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src={personalData.profile}
              width={400}
              height={280}
              alt="Narayan"
              className="rounded-lg relative transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer border-2 border-slate-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;