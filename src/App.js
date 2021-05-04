import "./style.css";
import { Route } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { createContext, useState } from "react";

import { data } from "./data";
export const BooksContext = createContext();

function App() {
  const [state, setState] = useState({
    bookList: data,
    cart: [],
  });

  const addToCart = (book) =>
    setState({
      ...state, // bir onceki state'in tum degerleri
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }], // cart degerini update etme \ onceden cart'ta olan degerleri cek \ icerisine yeni gelen { book ve count degeri ekle }
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, count: cartItem.count + 1 } :  cartItem 
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          :  cartItem 
      ),
    });
  };

  const remove = (id) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== id)
    })
  }

  return (
    <BooksContext.Provider
      value={{ state: state, addToCart, increase, decrease , remove}}
    >
      <div className="App container">
        <h1>SEÇ BEĞEN AL</h1>
        <Route exact path="/" component={Products}></Route>
        <Route path="/cart" component={Cart}></Route>
      </div>
    </BooksContext.Provider>
  );
}

export default App;
