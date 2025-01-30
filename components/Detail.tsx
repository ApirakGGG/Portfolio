"use client";
import { CloudDownload } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Detail = () => {
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

  const dowloadPdf = () => {
    const link = document.createElement("a"); //กำหนดให้ element a
    link.href = "/pdffile/React_Interview_Questions.pdf"; //ชื่อfile
    link.download = "ResumePDF"; // กำหนดชื่อไฟล์ตอนดาวน์โหลด
    document.body.appendChild(link); // เพิ่มfile
    link.click(); // เริ่มดาวน์โหลดไฟล์
    document.body.removeChild(link); // ลบ element ออกจาก DOM หลังจากการใช้งาน
  };
  return (
    <div className="mt-20 border rounded-lg h-[60vh]">
       <div className="flex justify-center mt-5">
          <h2 className="text-white text-xl ">Personal Details</h2>
        </div>
      <div className="space-y-1 px-10 py-10">
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
        {/* Donload Resume */}
        <Link href={"#"} legacyBehavior >
          <a
            onClick={(e) => {
              e.preventDefault(); // กันการรีเฟรช
              dowloadPdf(); //
            }}
            className="flex gap-1.5 border px-5 py-1.5 w-[300px] rounded-xl bg-transparent cursor-pointer"
          >
            <p>Download Resume PDF</p> <CloudDownload />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
