import Image from "next/image";
import TextGenerate from "./TextGenerate";
export default function Introduce() {
  return (
    <div className="flex justify-between md:flex-row cursor-pointer sm:px-10 py-5 sm:-mt-10">
      <div className="relative flex flex-col md:flex-row items-center py-5 px-5 space-x-0 md:space-x-16 sm:flex sm:justify-center">
        <Image
          src="/me.jpg"
          alt="your self"
          width={250}
          height={250}
          className="rounded-full object-cover items-center relative drop-shadow-2xl w-[150px] sm:w-[250px] md:w-[250px]"
        />
        <div className="w-full">
          <div className="flex ">
            <div className="content-none py-5 md:text-left">
              <TextGenerate
                text="WELCOME"
                speed={200}
                className="text-6xl bg-gradient-to-r to-gray-300 from-sky-500 text-transparent bg-clip-text drop-shadow-2xl"
              />
              <div className="mt-3">
                <TextGenerate
                  text="Apirak Jansawang"
                  speed={200}
                  className="text-4xl bg-gradient-to-r to-gray-300 from-sky-500 bg-clip-text text-transparent drop-shadow-2xl"
                />
              </div>

              <h2 className="ml-8 font-bold py-2 mt-2 mb-2 lg:w-[650px]">
                {"I'm "}{" "}
                <span className="text-[1rem]">
                  Front-end developer who loves working with{" "}
                  <span className="text-sky-500 underline decoration-wavy">
                    Next.js
                  </span>{" "}
                  and
                  <span className="text-sky-500 underline decoration-wavy">
                    Tailwind
                  </span>{" "}
                  CSS to build modern, responsive web applications. Enjoys
                  crafting clean and efficient UIs while having some experience
                  handling backend tasks within
                  <span className="text-sky-500 underline decoration-wavy">
                    Next.js
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* 3D image */}
      <div className="py-5 px-5 justify-center md:justify-end">
        <Image src="/jump.gif" alt="icon gift" width={150} height={150} />
      </div>
    </div>
  );
}
