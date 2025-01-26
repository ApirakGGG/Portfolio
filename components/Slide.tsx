"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function Slide() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "/G.png",
      description: "This is a brief description of Project 1.",
      link: "",
    },
    {
      id: 2,
      title: "Project 2",
      image: "/G.png",
      description: "This is a brief description of Project 2.",
      link: "",
    },
    {
      id: 3,
      title: "Project 3",
      image: "/G.png",
      description: "This is a brief description of Project 3.",
      link: "",
    },
  ];
  const settings = {
    dots: true, // แสดงจุดด้านล่าง
    intinitr: true, // วนซ้ำไม่มีที่สิ้นสุด
    speed: 1000, // ความเร็วในการเปลี่ยนสไลด์
    slidesToShow: 3, // แสดงครั้งละ 1 รูป
    slidesToScroll: 1, // เลื่อนทีละ 1 รูป
    arrows: true, // ปุ่มเลื่อนไปซ้ายขวา
    autoplay: true, //autoplay
    adaptiveHeight: false, // ปิดการปรับความสูงอัตโนมัติ
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },

    ],
  };
  return (
    <div className="max-w-7xl p-4 mx-auto ">
      <Slider {...settings}>
        {projects.map((item) => (
          <div key={item.id} className="p-4">
            <div className="drop-shadow-lg shadow-lg rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="object-cover w-[800px] rounded-xl"
              />
            </div>
            <div className="p-4 my-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
