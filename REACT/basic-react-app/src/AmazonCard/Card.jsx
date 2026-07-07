import "./Card.css";
import Price from "./Price";
import Content from "./Content";

export default function Card({ title, description, oldPrice, newPrice }) {
  return (
    <>
      <div className="Card">
        <Content title={title} description={description}></Content>
        <Price oldPrice={oldPrice} newPrice={newPrice}></Price>
      </div>
    </>
  );
}
