import backImg1 from "./Image/Rectangle 3.png";
import backImg2 from "./Image/Rectangle 3 (1).png";
import backImg3 from "./Image/Rectangle 3 (2).png";
import backImg4 from "./Image/Rectangle 4.png";

function Offers() {
  return (
    <section className="Offers_section">
      <div className="header_in_Offers">
        <p>Offers</p>
        <h1>Best Values</h1>
      </div>

      <div className="first_line_offer_card">
        <div className="offer_card">
          <div className="main_img_in_offer_card">
            <figure>
              <img src={backImg1} alt="Background" />
            </figure>
          </div>

          <div className="absolute_box_in_offer_card">
            <div className="text_in_offer_card">
              <h1>
                Daily <br /> Essentials
              </h1>
              <p>
                20% off <br /> Everyday
              </p>
            </div>

            <div className="Btn_in_offer_card">
              <button className="Offer_Btn">shop now</button>
            </div>
          </div>
        </div>

        <div className="offer_card">
          <div className="main_img_in_offer_card">
            <figure>
              <img src={backImg2} alt="Background" />
            </figure>
          </div>

          <div className="absolute_box_in_offer_card">
            <div className="text_in_offer_card">
              <h1>GET UP TO </h1>
              <p> 30% Off</p>
            </div>

            <div className="Btn_in_offer_card">
              <button className="Offer_Btn">shop now</button>
            </div>
          </div>
        </div>

        <div className="offer_card">
          <div className="main_img_in_offer_card">
            <figure>
              <img src={backImg3} alt="Background" />
            </figure>
          </div>

          <div className="absolute_box_in_offer_card">
            <div className="text_in_offer_card">
              <h1>
                Special <br /> Discount{" "}
              </h1>
              <p>for All Items</p>
            </div>

            <div className="Btn_in_offer_card">
              <button className="Offer_Btn">shop now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="second_line_offer_card">
        <div className="main_img_second_line">
          <figure>
            <img src={backImg4} alt="Background" />
          </figure>
        </div>

        <div className="absolulte_in_offer_card">
          <h1>Get $5 Cashback! Min Order of $50</h1>
          <div className="use_code_box">USE CODE : COMBOSUPERR2a</div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
