import React, { useState } from "react";
import video from "../data/video";

function Details({ videoObj, onToggleComments, onUpdateVideo, showComments }) {
  return (
    <div style={{ borderBottom: "2px solid grey" }}>
      <h1>{videoObj.title}</h1>
      <p>{`${videoObj.views} Views | Uploaded ${videoObj.createdAt}`}</p>
      <button onClick={() => onUpdateVideo({ upvotes: videoObj.upvotes + 1 })}>
        {videoObj.upvotes + "👍"}
      </button>
      <button
        onClick={() => onUpdateVideo({ downvotes: videoObj.downvotes + 1 })}
      >
        {videoObj.downvotes + "👎"}
      </button>
      <br />
      <button onClick={onToggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
    </div>
  );
}

export default Details;
