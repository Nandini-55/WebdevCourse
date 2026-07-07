import "./Product.css";

// function Product(props){
// console.log(props);

function Product({ title, price = 1, features, features2 }) {
  //using destructuring // default value of price=1
//   console.log(features2);
// const list = features.map((feature)=><li>{feature}</li>); // avoid printing elements together without space
  return (
    <div className="Product">
      {/* <h3>{props.title}</h3> */}
      <h3>{title}</h3>
      <h5>Price:{price}</h5>

      {/* <p>{features}</p> */}
      {/* Hi-techdurablefast  - in jsx each item in array prints one by one*/}

      {/* <p>{list}</p> */}
      <p>{features.map((feature)=><li>{feature}</li>)}</p>
      <p>{features2.a}</p> {/*Can't pass an object directly */}
    </div>
  );
}

export default Product;
