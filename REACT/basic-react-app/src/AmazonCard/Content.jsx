function Content({ title, description }) {
  return (
    <>
      <h3>{title}</h3>
      <ul>{description.map((point) => (
        <li>{point}</li>
      ))}</ul>
    </>
  );
}

export default Content;
