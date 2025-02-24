import Image from "next/image";
export default function BorderOpacity() {
  const skills = [
    { id: 1, name: "HTML", img: "/skills/html-5.png", opacity: "opacity-35" },
    { id: 2, name: "CSS", img: "/skills/css-3.png", opacity: "opacity-45" },
    { id: 3, name: "JS", img: "/skills/js.png", opacity: "opacity-55" },
    { id: 4, name: "TS", img: "/skills/ts.png", opacity: "opacity-65" },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-evenly mt-24 gap-5">
        {skills.map((item, index) => (
          <section key={index} className="relative items-center">
            <div className="flex justify-center items-center border border-gray-500 w-[350px] h-[300px] rounded-lg ease-in-out duration-500 hover:scale-110 hover:transform ">
              <div className={`absolute top-5 left-3 underline bg-black text-white px-3 py-2 z-10 rounded-lg  ${item.opacity}`}>Opacity{item.name}</div>
              <Image
                src={item.img}
                alt={item.name}
                width={100}
                height={100}
                className={"rounded-lg object-cover"}
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
