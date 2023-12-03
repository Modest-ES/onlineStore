import React from 'react';
import Header from './components/Header.js';
import CartOverlayShell from './components/CartOverlayShell.js';
import ArrowIcon from './components/ArrowIcon.js';
import MainShell from './components/MainShell.js';

export default function App() {
  const [cartIsOpened, setCartIsOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchFieldValue, setSearchFieldValue] = React.useState('');
 
  const addToCartFunction = (cartItem) => {
    setCartItems(prev => [...prev, cartItem]);
  }

  const addToFavoriteFunction = (favoriteItem) => {
    setFavoriteItems(prev => [...prev, favoriteItem]);
  }

  const headerData = (headerDataValue) => {
    setSearchFieldValue(headerDataValue);
  }

  const deleteableItem = (nameValue) => {
    setCartItems((prev) => prev.filter((item) => item.albumName !== nameValue));
  }

  return (
    <div className="wrapper clear">
      {cartIsOpened && <CartOverlayShell onClickBtnBack={() => setCartIsOpened(false)} items={cartItems} onClickBtnDelete={deleteableItem} onBtnClearCart={() => setCartItems([])} />}
      <Header headerData={headerData} onClickCart={() => setCartIsOpened(true)} />
      <MainShell addToCartFunction={addToCartFunction} addToFavoriteFunction={addToFavoriteFunction} headerData={searchFieldValue}/>
      <ArrowIcon />
    </div>
  );
}

