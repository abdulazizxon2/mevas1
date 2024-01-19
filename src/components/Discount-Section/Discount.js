import img1 from "./Images/Rectangle 7.png";
import img2 from "./Images/Rectangle 7 (1).png";
import img3 from "./Images/Rectangle 7 (2).png";
import img4 from "./Images/Rectangle 7 (3).png";
import img5 from "./Images/Rectangle 7 (4).png";
function Discout() {
  return (
    <section className="Discount_section">
      <div className="discount_card">
        <figure>
          <img src={img1} alt="Fruit" />
        </figure>

        <div className="infor_and_discount">
          <h2>10% OFF</h2>
          <h1>buy More & save More</h1>
          <p>Beverage</p>
        </div>

        <div className="shop_now_Btn">
          <button>shop now</button>
        </div>
      </div>
      <div className="discount_card">
        <figure>
          <img src={img2} alt="Fruit" />
        </figure>

        <div className="infor_and_discount">
          <h2>10% OFF</h2>
          <h1>buy More & save More</h1>
          <p>Nuts & Snacks</p>
        </div>

        <div className="shop_now_Btn">
          <button>shop now</button>
        </div>
      </div>
      <div className="discount_card">
        <figure>
          <img src={img3} alt="Fruit" />
        </figure>

        <div className="infor_and_discount">
          <h2>10% OFF</h2>
          <h1>buy More & save More</h1>
          <p>Fresh Vegetables</p>
        </div>

        <div className="shop_now_Btn">
          <button>shop now</button>
        </div>
      </div>
      <div className="discount_card">
        <figure>
          <img src={img4} alt="Fruit" />
        </figure>

        <div className="infor_and_discount">
          <h2>10% OFF</h2>
          <h1>buy More & save More</h1>
          <p> Fresh Fruits</p>
        </div>

        <div className="shop_now_Btn">
          <button>shop now</button>
        </div>
      </div>
      <div className="discount_card">
        <figure>
          <img src={img5} alt="Fruit" />
        </figure>

        <div className="infor_and_discount">
          <h2>10% OFF</h2>
          <h1>buy More & save More</h1>
          <p>Eggs & Dairy</p>
        </div>

        <div className="shop_now_Btn">
          <button>shop now</button>
        </div>
      </div>
      <div className="discount_card">
        <figure>
          <img src={img1} alt="Fruit" />
        </figure>

        <div className="infor_and_discount">
          <h2>10% OFF</h2>
          <h1>buy More & save More</h1>
          <p>Beverage</p>
        </div>

        <div className="shop_now_Btn">
          <button>shop now</button>
        </div>
      </div>
    </section>
  );
}

export default Discout;
