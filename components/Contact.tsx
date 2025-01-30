import React from 'react'
import { Mail, Phone, Github } from "lucide-react";

const Contact = () => {
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
  return (<div className="flex justify-center">
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
  )
}

export default Contact