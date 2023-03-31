import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <div></div>
    <img
      style={{
        width: "100%",
        height: "80%",
        objectFit: "cover",
        position: "relative",
      }}
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    />
    <Link
      style={{
        position: "absolute",
        top: "80%",
        left: "50%",
        fontSize: "20px",
      }}
      to={"/"}
      className="link-home"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;
