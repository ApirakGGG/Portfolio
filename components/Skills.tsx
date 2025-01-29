'use client'
import { ChevronDown } from 'lucide-react';
import React, {useState} from 'react'
import Image from 'next/image';

export default function Skills() {
    const [open, setOpen] = useState(true);
   
    const skills = [
      { id: 1, name: "HTML", img: "/skills/html-5.png" },
      { id: 2, name: "CSS", img: "/skills/css-3.png" },
      { id: 3, name: "JS", img: "/skills/js.png" },
      { id: 4, name: "TS", img: "/skills/ts.png" },
    ];
  
    const backend = [
      { id: 1, name: "React", img: "/freamwork/react.png" },
      { id: 2, name: "Next.js", img: "/freamwork/next.jpg" },
      { id: 3, name: "Tailwind", img: "/freamwork/tailwind.png" },
    ];
  
    const database = [
      { id: 1, name: "mysql", img: "/db/mysql.png" },
      { id: 2, name: "Pgs", img: "/db/PostgreSQ.png" },
      { id: 3, name: "MongoDB", img: "/db/MongoDB.png" },
    ];
    const service = [
      { id: 1, name: "git", img: "/service/Git_Logo_full.png" },
      { id: 2, name: "github", img: "/service/github-logo-vector.png" },
    ];
  return (
    <div><div className="h-[50vh] w-full px-5 py-5">
    <div className="flex justify-center my-5">
      <h2 className="text-white text-xl">Skills</h2>
    </div>
    <button
      onClick={() => setOpen(!open)}
      className="flex gap-2 my-5 text-lg px-5 font-bold"
    >
      All My Skills{" "}
      <ChevronDown
        className={`transform transition-transform ${
          open ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
    <div className="md:justify-start">
      {/* Front-end */}
      <h3 className="px-5 font-semibold">Front-end</h3>
      <div className="flex items-center my-2">
        {open &&
          skills.map((skill) => (
            <div key={skill.id} className=" items-center px-10 my-2">
              <Image
                src={skill.img}
                alt={skill.name}
                width={50}
                height={50}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
      </div>
      {/* Back-end */}
      <h3 className="px-5 font-semibold">Back-end</h3>
      <div className="flex items-center my-2">
        {open &&
          backend.map((backends) => (
            <div key={backends.id} className=" items-center px-10 my-2">
              <Image
                src={backends.img}
                alt={backends.name}
                width={50}
                height={50}
                className="rounded-lg object-cover "
              />
            </div>
          ))}
      </div>
      {/* Database */}
      <h3 className="px-5 font-semibold">Back-end</h3>
      <div className="flex items-center my-2">
        {open &&
          database.map((databases) => (
            <div key={databases.id} className=" items-center px-10 my-2">
              <Image
                src={databases.img}
                alt={databases.name}
                width={50}
                height={50}
                className="rounded-lg object-cover "
              />
            </div>
          ))}
      </div>
      {/* Service */}
      <h3 className="px-5 font-semibold">Service</h3>
      <div className="flex items-center my-2">
        {open &&
          service.map((services) => (
            <div key={services.id} className=" items-center px-10 my-2">
              <Image
                src={services.img}
                alt={services.name}
                width={50}
                height={50}
                className="rounded-lg object-cover "
              />
            </div>
          ))}
      </div>
    </div>
    </div></div>
  )
}

