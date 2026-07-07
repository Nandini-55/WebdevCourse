import Product from "./Product";

function ProductTab() {
  let options = ["Hi-tech", "durable", "fast"];
  let options2 = { a: "Hi-tech", b: "durable", c: "fast" };
  return (
    <>
      <Product
        title="Phone"
        price={30000}
        features={options}
        features2={options2}
      />  {/*- one way to pass array or object*/}

      {/* <Product
        title="Phone"
        price={30000}
        // features={["Hi-tech", "durable", "fast"]}
         features={[<li>Hi-tech</li>, <li>durable</li>, <li>fast</li>]} 
        //avoids printing element in para and without space

        features2={{ a: "Hi-tech", b: "durable", c: "fast" }}
      /> */}
      {/* <Product title="Laptop" price={40000} />
      <Product title="Pen" /> */}
    </>
  );
}

export default ProductTab;
