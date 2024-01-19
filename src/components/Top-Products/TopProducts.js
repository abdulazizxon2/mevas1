import img1 from "./Images/bodring.png";
import img2 from "./Images/behi.png";
import img3 from "./Images/karam.png";
import img4 from "./Images/orik.png";
import img5 from "./Images/piyoz.png";
// import { useEffect } from "react";
import Card from "../Card/Card";
let images = [img1, img2, img3, img4, img5];
function TopProducts({ state, setState, handleCart }) {
  //   console.log(state);
  return (
    <section className="TopProducts">
      <div className="header_in_products">
        <p>For You</p>
        <h1>For You Top Featured Products</h1>
      </div>
      <div className="top_products_item">
        {state.map((item, index) => {
          return (
            <Card
              item={item}
              images={images[index]}
              index={index}
              state={state}
              setState={setState}
              handleCart={handleCart}
            />
          );
        })}
      </div>
    </section>
  );
}

export default TopProducts;
