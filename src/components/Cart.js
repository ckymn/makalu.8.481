import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Cart = () => {
  const context = useContext(BooksContext);
  console.log(context);

  const totalCartAmount = context.state.cart
    .reduce((acc, i) => (acc = acc + i.price * i.count), 0)
    .toFixed(2);

  const totlaCount = context.state.cart.reduce(
    (acc, i) => (acc = acc + i.count),
    0
  );

  return (
    <div className="Cart">
      <h2>
        <h6
          style={{
            border: "2px solid black",
            display: "inline",
            padding: "5px",
          }}
        >
          Toplam Sepet Tutarı:{" "}
          <span style={{ fontWeight: "bold" }}>&#8378;{totalCartAmount}</span>
        </h6>

        <Link
          to="/"
          style={{
            textDecoration: "none",
            padding: "6px",
          }}
        >
          Kitap Listesi
        </Link>
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          Sepetim {" : " } { totlaCount}
        </span>
      </h2>

      {context.state.cart.map((item, i) => (
        <div className="book" key={i}>
          <img src={item.image} alt={item.name} style={{ width: "200px" }} />
          <div>
            <h4>{item.name}</h4>
            <p>Yazar: {item.author}</p>
            <p>Fiyat: &#8378;{item.price}</p>
            <p>Toplam: &#8378;{(item.price * item.count).toFixed(2)}</p>
            <p>Total : {item.count} adet var.</p>
            <button
              onClick={() => {
                context.decrease(item.id);
              }}
            >
              Azalt
            </button>
            <button
              onClick={() => {
                context.remove(item.id);
              }}
            >
              Sepetten Çıkar
            </button>{" "}
            <button
              onClick={() => {
                context.increase(item.id);
              }}
            >
              Arttır
            </button>
            <Link
              to="/"
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                border: "1px solid blue",
                padding: "6px",
              }}
            >
              Kitap Listesi
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
