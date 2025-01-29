import { Mail, Phone, Github,} from "lucide-react";
import Detail from "./Detail";
import Skills from "./skills";

export default function PersonalDetials() {
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

  return (
    <div className="my-56">
      <div className="my-10 flex justify-center rotate-6">
        <h1 className="text-5xl bg-gradient-to-t from-orange-500 to-purple-700 text-transparent bg-clip-text">
          ABOUT <span className="text-sky-300 underline">ME</span>
        </h1>
      </div>
      {/* detail & skills */}
      <div className="px-5 py-5 mt-5 flex flex-col gap-3">
        <div className="h-[50vh] w-full px-5 py-5">
          <div className="flex justify-center my-5 ">
            <h2 className="text-white text-xl ">Personal Details</h2>
          </div>
          <div>
            {/* Detail */}
            <Detail />
          </div>
        </div>
        {/* skills */}
        <Skills />
      </div>
      {/* section Contact*/}
      <div className="flex justify-center">
        <div className="h-[30vh] w-[60vh] px-5 ">
          <div className="flex justify-center my-7">
            <h2 className="text-white text-xl">Contact</h2>
          </div>
          <div className=" md:justify-start text-sm lg:text-lg">
            {contact.map((item) => (
              <div
                key={item.id}
                className="px-5 flex justify-center gap-3 my-5 cursor-pointer "
              >
                <item.icon />
                <p className="">{item.name}</p>
                <p className="text-blue-400 underline">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
