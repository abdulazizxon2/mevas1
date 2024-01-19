function Card({ item, images, state, setState, handleCart }) {
  function handleMinus(item) {
    if (item.count > 1) {
      setState(
        state.map((n) => {
          return n.id === item.id && n.count > 1
            ? { ...n, count: n.count - 1 }
            : n;
        })
      );
    } else {
      alert("Sonlar 0 dan kamaymaydi");
    }
    // console.log(id);
  }

  function handlePlus(item) {
    if (item.count < 10) {
      setState(
        state.map((n) => {
          return item.id === n.id ? { ...n, count: n.count + 1 } : n;
        })
      );
    } else {
      alert("Sonlar O'ndan ko'paymaydi!");
    }
  }

  function handleLike(item) {
    setState(
      state.map((m) => {
        return item.id === m.id ? { ...m, like: !m.like } : m;
      })
    );
    console.log(1);
  }
  return (
    <div className="top_products_card">
      <div className="start_in_top_card">
        <div className="discound_in_top_card">
          <p>{item.discount}%</p>
          <p>Off</p>
        </div>
        <div className="like_box_in_top_card">
          <button className="like_Btn" onClick={() => handleLike(item)}>
            {item.like ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      </div>

      <div className="image_in_top_card">
        <figure>
          <img src={images} alt="Img" />
        </figure>
      </div>

      <div className="text_in_card">
        <p>Available(in stock)</p>
        <h1>{item.name}</h1>
        <div className="money_top_card">
          <p>${(item.money - (item.money / 100) * item.discount).toFixed(2)}</p>
          <del>${item.money}</del>
        </div>
      </div>

      <div className="plus_minus_top_card">
        <div className="btns_section">
          <button
            className="MinusBtn PLUS_MINUS"
            onClick={() => {
              handleMinus(item);
            }}
          >
            -
          </button>
          <h1>{item.count}</h1>
          <button
            className="PlusBtn PLUS_MINUS"
            onClick={() => {
              handlePlus(item);
            }}
          >
            +
          </button>
        </div>

        <div className="cart_box_in_card">
          <button className="cart_Btn" onClick={() => handleCart(item)}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
