import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Cart({ cart, setCart, activeWin, closeCart }) {
  let handleDel = function (id) {
    setCart(cart.filter((t) => t.id !== id));
  };
  return (
    <>
      <div className={activeWin ? "open-cart" : "close-cart"}>
        <table border={1} >
          <thead>
            <tr>
              <th>№</th>
              <th>Name </th>
              <th>Price </th>
              <th>Chegirma</th>
              <th>Yoqtirilgan </th>
              <th>Soni</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((elem, index) => {
                return (
                  <tr key={elem.id}>
                    <th> {index + 1} </th>
                    <td> {elem?.name} </td>
                    <td> {elem?.money} </td>
                    <td> {elem?.discount} </td>
                    <td> {elem?.like ? "yoqdi" : "yoqmadi"} </td>
                    <td> {elem?.count} </td>
                    <td>
                      <button onClick={() => handleDel(elem.id)} className="delete">delete <RiDeleteBin6Fill /></button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={100}
                  style={{ textAlign: "center", fontSize: "30px" }}
                >
                  no Data...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
