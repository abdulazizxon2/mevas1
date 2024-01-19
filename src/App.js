import { useState } from "react";
import Categories from "./components/Categories/Categories";
import Discout from "./components/Discount-Section/Discount";
import Navbar from "./components/Navbar/Navbar";
import Start from "./components/Start-Section/Start";
import TopProducts from "./components/Top-Products/TopProducts";
import "./style/style.css";
import Offers from "./components/Offers/Offers";
import Vegatables from "./components/Vegatables/Vegatables";
import Footer from "./components/Footer/Footer";
import NewAddedProducts from "./components/New Added/NewAdded";
import Cart from "./components/cart/Cart";
import Yoqtirligan from "./components/yoqtirilgan/Yoqtirligan";
let categories = [
  {
    name: "Vegetables & Fruits",
  },

  {
    name: "Grocery & Staples",
  },

  {
    name: "Dairy & Eggs",
  },

  {
    name: "Beverages",
  },

  {
    name: "Snacks",
  },

  {
    name: "Home Care",
  },
];

function App() {
  let [state, setState] = useState([
    {
      id: 1,
      name: "Fresh organic apricot",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },

    {
      id: 2,
      name: "Cucumber",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },

    {
      id: 3,
      name: "Hazelnuts filbert nut",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },

    {
      id: 4,
      name: "raw broccoli",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },

    {
      id: 5,
      name: "Organic quince",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },
  ]);
  let [vegab, setVegab] = useState([
    {
      id: 6,
      name: " Red apple",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },
    {
      id: 7,
      name: "capsicum-green",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },
    {
      id: 8,
      name: "Pear fruit",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },
    {
      id: 9,
      name: " Pear fruit",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },
    {
      id: 10,
      name: "Fresh raspberry",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },
  ]);
  let [Add, SetAdd] = useState([
    {
      id: 11,
      name: "Ginger",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },

    {
      id: 12,
      name: "Two fresh figs",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },

    {
      id: 13,
      name: "Strawberry",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },

    {
      id: 14,
      name: "Eggplant",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },

    {
      id: 15,
      name: "Egg",
      discount: 15,
      money: 15,
      like: false,
      count: 1,
    },
  ]);

  // const [umumiy, setUmumiy] = useState({
  //   state: [
  //     {
  //       id: 1,
  //       name: "Fresh organic apricot",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },

  //     {
  //       id: 2,
  //       name: "Cucumber",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },

  //     {
  //       id: 3,
  //       name: "Hazelnuts filbert nut",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },

  //     {
  //       id: 4,
  //       name: "raw broccoli",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },

  //     {
  //       id: 5,
  //       name: "Organic quince",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },
  //   ],
  //   vegab: [
  //     {
  //       id: 6,
  //       name: " Red apple",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },
  //     {
  //       id: 7,
  //       name: "capsicum-green",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },
  //     {
  //       id: 8,
  //       name: "Pear fruit",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },
  //     {
  //       id: 9,
  //       name: " Pear fruit",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },
  //     {
  //       id: 10,
  //       name: "Fresh raspberry",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },
  //   ],
  //   Add: [
  //     {
  //       id: 11,
  //       name: "Ginger",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },

  //     {
  //       id: 12,
  //       name: "Two fresh figs",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },

  //     {
  //       id: 13,
  //       name: "Strawberry",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },

  //     {
  //       id: 14,
  //       name: "Eggplant",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },

  //     {
  //       id: 15,
  //       name: "Egg",
  //       discount: 15,
  //       money: 15,
  //       like: false,
  //       count: 1,
  //     },
  //   ],
  // });

  const [cart, setCart] = useState([]);
  const handleCart = (item) => {
    console.log(item);
    if (cart.filter((o) => o.id === item.id).length === 0) {
      setCart([...cart, item]);
    } else {
      alert("bu mahsulot mavjud");
    }
  };
  let [activeWin, setActiveWin] = useState({
    cart: false,
  });
  
  function cartActive() {
    setActiveWin({ ...activeWin, cart: !activeWin.cart });
  }
  function closeCart() {
    setActiveWin({ ...activeWin, cart: !activeWin.cart });
  }
  return (
    <div className="App">
      <>
        <Cart cart={cart} setCart={setCart} activeWin={activeWin.cart} closeCart={closeCart}/>
        <Yoqtirligan data={[...state, ...vegab, ...Add]} />
        <Start />
        <Navbar
          cart={cart}
          son={[...state, ...vegab, ...Add].filter((p) => p.like).length}
          activeBtn={cartActive}
        />
        <Discout />
        <Categories massiv={categories} />
        <TopProducts
          state={state}
          setState={setState}
          handleCart={handleCart}
        />
        <Offers />
        <Vegatables state={vegab} setState={setVegab} handleCart={handleCart} />
        <NewAddedProducts
          state={Add}
          setState={SetAdd}
          handleCart={handleCart}
        />
        <Footer />
      </>
    </div>
  );
}

export default App;
