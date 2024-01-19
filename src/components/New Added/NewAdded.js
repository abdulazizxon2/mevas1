import img1 from "./images/imbir.png";
import img2 from "./images/fig.png";
import img3 from "./images/qulupnoy.png";
import img4 from "./images/baqlajon.png";
import img5 from "./images/tuxum.png";
import Card from "../Card/Card";
let images = [img1, img2, img3, img4, img5];
function NewAddedProducts({ state, setState, handleCart }) {
  return (
    <section className="new_added_products">
      <div className="header_in_add_product">
        <p>For You</p>
        <h1>Added new Products</h1>
      </div>
      <div className="header_in_new_Added_item">
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

export default NewAddedProducts;
