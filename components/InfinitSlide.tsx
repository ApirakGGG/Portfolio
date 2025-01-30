"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InfinitSlide() {
  //images
  const images = [
    "/skills/html-5.png",
    "/skills/css-3.png",
    "/skills/js.png",
    "/skills/ts.png",
    "/freamwork/react.png",
    "/freamwork/next.jpg",
    "/freamwork/tailwind.png",
  ];
  return (
    <div className="relative w-full overflow-hidden py-10 px-10 items-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:via-transparent before:to-black before:z-10">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ ease: 'linear', duration: 50, repeat: Infinity }}
      >
        {/* ใช้ [...images, ...images] เพื่อให้เลื่อนแบบต่อเนื่อง */}
        {[...images, ...images].map((item, index) => (
          <div key={index} className="mx-4">
            <Image
              src={item}
              alt={`Slide ${index}`}
              width={200}
              height={200}
              className="rounded-lg shadow-lg items-center h-20 w-60 object-contain bg-transparent"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
