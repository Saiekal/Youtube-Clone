import React from "react";
import { useParams } from "react-router-dom";

const Playvideo = () => {
  const { id } = useParams();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
      }}
    >
      <iframe
        width="1000"
        height="600"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Playvideo;