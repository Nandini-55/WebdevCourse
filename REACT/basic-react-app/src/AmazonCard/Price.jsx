export default function Price({ oldPrice, newPrice }) {
  return (
    <>
    <div style={{ backgroundColor: "#e4c770", height: "48px", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}>
      <span>
        <s>{oldPrice}</s>
      </span>
      &nbsp;
      <span> <b>{newPrice}</b></span>
      </div>
    </>
  );
}
