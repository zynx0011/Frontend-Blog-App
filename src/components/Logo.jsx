import React from "react";

function Logo({ width = "100px" }) {
  return (
    <img
      src="https://blog.logrocket.com/wp-content/uploads/2021/04/express-js-template-engines.png"
      alt="Logo"
      className="rounded-lg w-[80px]"
    />
  );
}

export default Logo;
