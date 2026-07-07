function handleFormSubmit() {
  event.preventDefault(); //if preventDefault  is not acitivated then the console will performs its default behaviour and gets refresed after the submission- then the following message will not be displayed
  console.log("form was submitted");
  console.log(event); //Event Object
}

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="write something " />
      <button type="submit" onClick={handleFormSubmit}>
        Submit{" "}
      </button>
    </form>
  );
}
