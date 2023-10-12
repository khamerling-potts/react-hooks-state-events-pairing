import React from "react";

function Comments({ comments }) {
  const commentArray = comments.map((comment) => {
    return (
      <div key={comment.coment}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>{comments.length + " Comments"}</h2>
      {commentArray}
    </div>
  );
}

export default Comments;
