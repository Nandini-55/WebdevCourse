import { useState } from "react";

export default function CommentForm({addNewComment}) {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });

  let updateData = (event) => {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    addNewComment(formData);
    setFormData(() => {
      return {
        username: "",
        remark: "",
        rating: 5,
      };
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <h3>Give a Comment!</h3>
        <br />
        <br />
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          value={formData.username}
          onChange={updateData}
        />
        <br />
        <br />
        <label htmlFor="remark">Remarks: </label>
        <textarea
          placeholder="Add a comment"
          name="remark"
          value={formData.remark}
          onChange={updateData}
        >
          {" "}
        </textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          min={1}
          max={5}
          onChange={updateData}
        />
        <br /><br />
        <button type="submit">Add Comment</button>
      </form>
    </>
  );
}
