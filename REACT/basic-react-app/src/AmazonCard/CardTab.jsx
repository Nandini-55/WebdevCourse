import "./CardTab.css";
import Card from "./Card";
export default function CardTab() {
  return (
    <>
      <h2 style={{textAlign:"center"}}>Blockbuster Deals on Computer Accessories | Shop Now</h2>
      <div className="CardTab">
        <Card
          title="Logitech MX Master"
          description={["8000 DPI", "5 Programmable Buttons"]}
          oldPrice="12,495"
          newPrice="8,999"
        />
        <Card
          title="Apple Pencil (2nd Gen)"
          description={["Intuitive Touch Surface", "Designed for iPad Pro"]}
          oldPrice="11,900"
          newPrice="9,199"
        />
        <Card
          title="Zebronics"
          description={["Designed for iPad Pro", "Intuitive Touch Surface"]}
          oldPrice="1,599"
          newPrice="899"
        />
        <Card
          title="Petronics Toad"
          description={["Wireless Mouse 2.4GHz", "Optical Orientation"]}
          oldPrice="599"
          newPrice="278"
        />
      </div>
    </>
  );
}
