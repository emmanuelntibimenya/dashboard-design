import React from "react";
import { BiLogoAndroid, BiLogoHtml5, BiBuilding } from "react-icons/bi";

const courses = [
  {
    title: "Web Development",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "App Developent",
    duration: "5 Hours",
    icon: <BiLogoAndroid />,
  },
  {
    title: "UX & UI",
    duration: "3 Hours",
    icon: <BiBuilding />,
  },
];

export default function Card() {
  return (
    <div className="card--container">
      {courses.map((item) => (
        <div className="card">
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
