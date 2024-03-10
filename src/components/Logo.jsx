import React from "react";

function Logo({ width = "100px" }) {
  return (
    <img
      src="https://blog.logrocket.com/wp-content/uploads/2021/04/express-js-template-engines.png"
      alt=""
      width={"80px"}
      className="rounded-lg"
    />
  );
}

export default Logo;
