import appStore from "./images/Group.svg";
import googlePlay from "./images/g10.svg";
function Footer() {
  return (
    <section className="Footer">
      <div className="first_line_in_footer">
        <div className="first_part_in_footer">
          <div className="logo_in_footer">
            <h1>LOGO</h1>
            <img
              src="https://www.freeiconspng.com/thumbs/apple-png/apple-fruit-cartoon-transparent-28.png"
              alt="Apple"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/8025/8025929.png"
              alt="Kiwi"
            />

            <div className="address_in_footer">
              <p>
                Address: 60-49 Road 11378 New York <br /> Phone: +65 11.188.888{" "}
                <br /> Email: hello@colorlib.com
              </p>
            </div>
          </div>

          <div className="ul_card_in_footer">
            <h1>Useful link</h1>
            <ul>
              <li>
                <a href="#">About Us </a>
              </li>

              <li>
                <a href="#">About Our Shop</a>
              </li>

              <li>
                <a href="#">Delivery infomation</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Our Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="other_ul_card_in_footer">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">product</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">stories</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="second_part_in_footer">
          <div className="header_in_second_part">
            <h1>Download App</h1>
          </div>

          <div className="button_in_second_part">
            <button>
              <img src={appStore} alt="Appstore" />
            </button>
            <button>
              <img src={googlePlay} alt="Google" />
            </button>
          </div>

          <div className="input_box_in_footer">
            <label htmlFor="signUpFooter">Sign Up for Our Newsletter</label>
            <form>
              <input
                type="email"
                placeholder="enter email address"
                id="signUpFooter"
              />
              <button className="SubsBtn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="end_of_footer">
        <p>
          Copyright ©2021 All rights reserved | This template is made with 💚 by
          LOGO
        </p>
      </div>
    </section>
  );
}

export default Footer;
