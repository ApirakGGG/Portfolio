"use client";
import { Mail, Phone, Github, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function PersonalDetials() {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
  const contact = [
    {
      id: 1,
      name: "Email:",
      text: "naratah012345@gmail.com",

      icon: Mail,
    },
    {
      id: 2,
      name: "GitHub:",
      text: "https://github.com/ApirakGGG",

      icon: Github,
    },
    { id: 3, name: "Phone:", text: "+66932341644", icon: Phone },
  ];

  // current my BirthDay
  const calculateAge = (birthDate: string, baseAge: number = 20): number => {
    const birth = new Date(birthDate); //setวันเกิด
    const today = new Date(); //กำหนดวัน
    let age = today.getFullYear() - birth.getFullYear();
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return baseAge + (age - (2024 - birth.getFullYear()));
  };

  const [age, setAge] = useState(20);
  useEffect(() => {
    setAge(calculateAge("2004-03-25"));
  }, []);

  return (
    <div className="my-32">
      <div className="my-10 flex justify-center rotate-6">
        <h1 className="text-5xl bg-gradient-to-t from-orange-500 to-purple-700 text-transparent bg-clip-text">
          ABOUT <span className="text-sky-300 underline">ME</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-5 ">
        <div className="border-2 border-black rounded-lg row-span-3">
          <div className="flex justify-center my-5 ">
            <h2 className="text-white text-xl ">Personal Details</h2>
          </div>
          {/* button Personal Details */}
          <div className="px-5">
            <button
              onClick={() => setOpen4(!open4)}
              className="flex gap-2 my-5"
            >
              Basic Information{" "}
              <ChevronDown
                className={`transform transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
          <div className="px-5 -mt-2">
            {open4 && (
              <div className="space-y-1">
                <h3 className="font-bold text-blue-400">Detials</h3>
                <ul className="list-disc px-5 items-center">
                  <li>Name: Apirak Jansawang</li>
                  <li>Age: {age}</li>
                  <li>{"Education level: Bachelor's degree"}</li>
                  <li>Bachelor of Business Administration : B.B.A.</li>
                </ul>
                <h3 className="font-bold text-blue-400 ">
                  Skills Overview <span className="text-yellow-500">&</span>{" "}
                  Programming, Frameworks, Tools
                </h3>
                <ul className="list-disc px-5 items-center">
                  <li>HTML, CSS, JavaScript (React, Next.js, Tailwind CSS)</li>
                  <li>Backend (Node.js, Express)</li>
                  <li>Database (MongoDB, PostgreSQL)</li>
                  <li>Git</li>
                </ul>
                <h3 className="font-bold text-blue-400">Languages</h3>
                <ul className="list-disc px-5 items-center">
                  <li>Thai (Native)</li>
                  <li>English (Basic Communication, Improving)</li>
                </ul>
                <h3 className="font-bold text-blue-400">Work Experience</h3>
                <ul className="list-disc px-5 items-center">
                  <li>--</li>
                  <li>--</li>
                </ul>
              </div>
            )}
            <div className="mt-7">
              <Link
                href={"/dowloadPDF"}
                className="border px-5 py-1 rounded-xl bg-gradient-to-r from-sky-400 to-pink-500"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
        <div className="border-2 border-black rounded-lg md:col-span-2 w-auto ">
          <div className="flex justify-center my-5">
            <h2 className="text-white text-xl">Skills</h2>
          </div>
          <div className="px-5 gap-3 my-5 cursor-pointer md:grid-cols-2 ">
            {/* button 1 */}
            <div className="flex justify-around ">
              {/* Front-end */}
              <button
                onClick={() => setOpen(!open)}
                className="flex gap-2 my-5"
              >
                Front-End{" "}
                <ChevronDown
                  className={`transform transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {/*  FreamWork & Libralies */}
              <button
                onClick={() => setOpen1(!open1)}
                className="flex gap-2 my-5"
              >
                FreamWork & Libralies{" "}
                <ChevronDown
                  className={`transform transition-transform ${
                    open1 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {/* section 1 & 2 */}
            <div className="flex justify-around w-[2-vh] gap-10">
              <div className="flex justify-center w-[50vh] h-[8vh]">
                {open && (
                  <div>
                    <ul className="gap-5 items-center flex">
                      <li className="text-lg flex gap-5 my-4 items-center">
                        <Image
                          src={"/skills/html-5.png"}
                          alt="HTML"
                          width={50}
                          height={50}
                          className="rounded-lg object-cover"
                        />
                      </li>
                      <li className="text-lg flex gap-5 my-4">
                        <Image
                          src={"/skills/css-3.png"}
                          alt="CSS"
                          width={50}
                          height={50}
                          className="rounded-lg object-cover"
                        />
                      </li>
                      <li className="text-lg flex gap-5 my-4">
                        <Image
                          src={"/skills/js.png"}
                          alt="JS"
                          width={50}
                          height={50}
                          className="rounded-lg object-cover"
                        />
                      </li>
                      <li className="text-lg flex gap-5 my-4">
                        <div>
                          <Image
                            src={"/skills/ts.png"}
                            alt="TS"
                            width={50}
                            height={50}
                            className="rounded-lg object-cover"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex justify-center w-[50vh] h-[8vh]">
                {open1 && (
                  <div>
                    <ul className="gap-5 items-center flex">
                      <li className="text-lg flex gap-5 my-4 items-center">
                        <Image
                          src={"/freamwork/react.png"}
                          alt="react"
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </li>
                      <li className="text-lg flex gap-5 my-4">
                        <Image
                          src={"/freamwork/next.jpg"}
                          alt="next"
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </li>
                      <li className="text-lg flex gap-5 my-4">
                        <Image
                          src={"/freamwork/tailwind.png"}
                          alt="tailwind"
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* button 2 */}
            <div className="flex justify-around">
              {/* Database */}
              <button
                onClick={() => setOpen2(!open2)}
                className="flex gap-2 my-5"
              >
                DataBase{" "}
                <ChevronDown
                  className={`transform transition-transform ${
                    open2 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {/* service */}
              <button
                onClick={() => setOpen3(!open3)}
                className="flex gap-2 my-5"
              >
                Service{" "}
                <ChevronDown
                  className={`transform transition-transform ${
                    open3 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {/* section 3 & 4 */}
            <div className="flex justify-around w-[2-vh] gap-10 ">
              <div className="flex justify-center w-[50vh] h-[8vh]">
                {open2 && (
                  <div>
                    <ul className="gap-5 items-center flex">
                      <li className="text-lg flex gap-5 my-4 items-center">
                        <Image
                          src={"/db/mysql.png"}
                          alt="mysql"
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </li>
                      <li className="text-lg flex gap-5 my-4">
                        <Image
                          src={"/db/PostgreSQ.png"}
                          alt="Pgs"
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </li>
                      <li className="text-lg flex gap-5 my-4">
                        <Image
                          src={"/db/MongoDB.png"}
                          alt="mongoDB"
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex justify-center w-[50vh] h-[8vh]">
                {open3 && (
                  <div>
                    <ul className="gap-5 items-center flex">
                      <li className="text-lg flex gap-5 my-4 items-center">
                        <Image
                          src={"/service/Git_Logo_full.png"}
                          alt="git"
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      </li>
                      <li className="text-lg flex gap-5 my-4">
                        <Image
                          src={"/service/github-logo-vector.png"}
                          alt="github"
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black rounded-lg md:col-span-2 w-auto">
          <div className="flex justify-center my-5">
            <h2 className="text-white text-xl">Contact</h2>
          </div>
          {contact.map((item) => (
            <div
              key={item.id}
              className="px-5 md:flex gap-3 my-5 cursor-pointer "
            >
              <item.icon />
              <p className="">{item.name}</p>
              <p className="text-blue-400 underline">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
