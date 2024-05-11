import React from "react";

function Logo({ width = "100px" }) {
  return (
    <img
      src="/expressblog.png"
      alt="Logo"
      className="rounded-lg w-[80px] h-auto"
    />
  );
}

export default Logo;
