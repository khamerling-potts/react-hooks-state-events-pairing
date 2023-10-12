import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Details from "./Details.js";
import Comments from "./Comments.js";

function App() {
  // console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(true);
  const [videoState, setVideoState] = useState(video);
  console.log("video state: ", videoState);

  function handleToggleComments() {
    setShowComments((showComments) => !showComments);
  }

  function handleUpdateVideo(updates) {
    setVideoState({ ...videoState, ...updates });
  }

  return (
    <div>
      <Video link={videoState.embedUrl} title={videoState.title} />
      <Details
        videoObj={videoState}
        onToggleComments={handleToggleComments}
        onUpdateVideo={handleUpdateVideo}
        showComments={showComments}
      />
      {showComments ? <Comments comments={videoState.comments} /> : null}
    </div>
  );
}

export default App;

/* app (hold video state and show comments state)
    video iframe ({link}) 
    details ({video object, onToggleComments})
    comments ({comments array})*/
