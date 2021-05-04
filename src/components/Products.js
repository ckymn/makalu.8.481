import React, { useContext   } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Products = (props) => {
  const context = useContext(BooksContext);
  console.log("-",context);

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
      </h2>
      {context.state.bookList.map((item, i) => (
        <div className="book" key={i}>
          <img src={item.image} alt={item.author} />
          <div>
            <h4>{item.name}</h4>
            <p>Yazar: {item.author}</p>
            <p>Fiyat: &#8378; {item.price}</p>
            <button onClick={() => context.addToCart(item)}>Sepete Ekle</button>
            <Link
              to="/cart"
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                border: "1px solid blue",
                padding: "6px",
			  }}
            >
              Sepetim
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
