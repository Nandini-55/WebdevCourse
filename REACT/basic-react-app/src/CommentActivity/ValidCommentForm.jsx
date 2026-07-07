import { useState } from "react";
import { useFormik } from "formik";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  return errors;
};

export default function CommentForm({ addNewComment }) {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} action="">
        {/*use formik default handler */}
        <h3>Give a Comment!</h3>
        <br />
        <br />
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          value={formik.values.username}
          //access data from formik values
          onChange={formik.handleChange}
          //use formik default handler
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        {/*shows validation error */}

        <br />
        <br />
        <label htmlFor="remark">Remarks: </label>
        <textarea
          placeholder="Add a comment"
          name="remark"
          value={formik.values.remark}
          onChange={formik.handleChange}
        >
          {" "}
        </textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          name="rating"
          value={formik.values.rating}
          min={1}
          max={5}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Add Comment</button>
        {/*button type must be submit */}
      </form>
    </>
  );
}
