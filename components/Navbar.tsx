"use client";
import { ModeToggle } from "./ToggleMode";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import TextGenerate from "./TextGenerate";

export default function Navbar() {
  //scroll top top with smooth
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); //กันรีเฟรช
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  const socials = [
    {
      id: "1",
      name: "github",
      link: "https://github.com/ApirakGGG",
      icon: Github,
    },
    {
      id: "2",
      name: "instargram",
      link: "https://www.instagram.com/_aaaaajsw/",
      icon: Instagram,
    },
  ];
  return (
    <div className=" sticky top-0 z-10 py-5 px-5 bg-black">
      <div className="flex justify-around items-center">
        <div className=" w-[10vh] ">
          {/* scroll to top */}
          <Link onClick={scrollToTop} href="/" scroll={false}>
            <TextGenerate
              text={"Portfolio"}
              speed={200}
              className="bg-gradient-to-r from-purple-300 to-sky-500 text-transparent bg-clip-text text-3xl"
            />
          </Link>
        </div>
        <div className="flex gap-5 ">
          {socials.map((item) => (
            <div
              key={item.id}
              className="transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 duration-700"
            >
              <Link href={item.link} className="z-20">
                <item.icon className="text-white"/>
              </Link>
            </div>
          ))}
        </div>
        <div className="items-center text-white">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
