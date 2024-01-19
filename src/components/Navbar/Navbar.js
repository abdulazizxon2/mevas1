function Navbar({ cart, son, activeBtn, likeActive }) {
  return (
    <nav>
      <div className="firstline_in_navbar">
        <div className="logo">
          <h1>LOGO</h1>
          <figure>
            <img
              src="https://www.freeiconspng.com/thumbs/apple-png/apple-fruit-cartoon-transparent-28.png"
              alt="Apple Logo"
            />
          </figure>
        </div>
        <div className="select_box_in_Navbar">
          <label htmlFor="select">
            <i class="fa-solid fa-location-dot"></i>
          </label>
          <select name="select" id="select">
            <option value="">Gurugram</option>
          </select>
        </div>
        <div className="input_box_in_Navbar">
          <label htmlFor="search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </label>
          <input type="text" id="search" placeholder="Search for products..." />
        </div>
        <div className="mini_section_in_Navbar">
          <div className="phone_box">
            <i class="fa-solid fa-phone-volume"></i>
            <p>1800-000-000</p>
          </div>
          <div className="like_box_in_Navbar">
            <button className="like-bor" onClick={likeActive}>
              <i class="fa-regular fa-heart"></i>
              <span className={son ? "sonlar" : "sonlarsiz"}>
                {son ? son : ""}
              </span>
            </button>
          </div>
        </div>
        <div className="user_box_in_navbar">
          <label htmlFor="UserSelect">
            <i class="fa-regular fa-user"></i>
          </label>
          <div className="select_in_user_box">
            <select name="user_select" id="UserSelect">
              <option value="">John Doe</option>
            </select>
          </div>
        </div>
      </div>
      <div className="second_line_in_Navbar">
        <div className="first_part_in_navbar">
          <div className="btn_in_nav_secon_line">
            <button className="secon_line_btn">
              <i class="fa-solid fa-bars"></i>
              <p>Select Categories</p>
            </button>
          </div>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>stores</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="cart_select_div">
          <label htmlFor="cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </label>
          <button onClick={activeBtn}>
            Cart <span>Cart {cart.length > 0 ? cart.length : ""}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
