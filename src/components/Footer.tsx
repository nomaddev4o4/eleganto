import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+800px)]">
        <div className="sticky top-[calc(100vh-800px)] h-[800px]">
          <Content />
        </div>
      </div>
    </div>
  );
}
