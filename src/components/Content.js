import React from "react";
import ContentHeader from "./ContentHeader";
import "../styles/content.css";
import Card from "../components/Card";

export default function Content() {
  return (
    <div className="content">
      <ContentHeader />
      <Card />
    </div>
  );
}
