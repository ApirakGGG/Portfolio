"use client";
import { useState, useEffect } from "react";
export default function TextGenerate({
  text,
  speed = 100,
  className = "",
}: {
  text: string;
  speed: number;
  className: string;
}) {
  //   console.log(displaytext);
  const [visible, setVisible] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setVisible(text.slice(0, index + 1)); // เพิ่มตัวอักษรทีละตัว
        setIndex(index + 1); 
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);
  return (
    <span className={`text-2xl font-extrabold ${className}`}>
      {visible.split("").map((char, index) => (
        <span
          key={index}
          className={`transition-opacity duration-300 ease-in-out opacity-100 `}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
