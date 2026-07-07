import { useState } from "react";
// import CommentForm from "./CommentForm";
import CommentForm from "./ValidCommentForm";

export default function Comments() {
  let [comments, setComments] = useState([]);
function addComment(comment){
    setComments((currComment)=>{
        return [...currComment,comment];
    })
}
  return (
    <>
      <h3>All Comments</h3>
      <div className="comment" >
        {comments.map((comment,idx)=><div style={{fontSize: "medium" , padding: "10px",
  margin: "8px 0",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box"}} key={idx}><p>{comment.username}</p> <br /><p>{comment.remark}</p><p>{comment.rating}</p></div>)}
      </div>
      <hr style={{width:"100%"}}/>
      <CommentForm addNewComment={addComment}/>
    </>
  );
}
