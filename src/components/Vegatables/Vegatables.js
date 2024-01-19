import Card from "../Card/Card";
import img1 from "./Images/balgariski.png";
import img2 from "./Images/malina.png";
import img3 from "./Images/nok.png";
import img4 from "./Images/olma.png";
import img5 from "./Images/sliva.png";
let Imgs = [img1, img2, img3, img4, img5];
function Vegatables({ state, setState, handleCart}) {
  return (
    <section className="Vegatables_section">
      <div className="header_in_vegatable">
        <p>for you</p>
        <h1>Top Vegetables & Fruits Products</h1>
      </div>

      <div className="vegab_item">
        {state.map((item, index) => {
          return (
            <Card
              item={item}
              setState={setState}
              state={state}
              images={Imgs[index]}
              handleCart={handleCart}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Vegatables;
