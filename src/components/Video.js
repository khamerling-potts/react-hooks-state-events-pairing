import React from "react";

function Video({ link, title }) {
  return (
    <iframe
      width="919"
      height="525"
      src={link}
      frameBorder="0"
      allowFullScreen
      title={title}
    />
  );
}

export default Video;
