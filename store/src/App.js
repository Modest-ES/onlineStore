import React from 'react';
import Header from './components/Header.js';
import CartOverlayShell from './components/CartOverlayShell.js';
import ArrowIcon from './components/ArrowIcon.js';
import MainShell from './components/MainShell.js';

export default function App() {
  const [cartIsOpened, setCartIsOpened] = React.useState(false);
  const [favoriteIsOpened, setFavoriteIsOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchFieldValue, setSearchFieldValue] = React.useState('');
 
  const addToCartFunction = (cartItem) => {
    setCartItems(prev => [...prev, cartItem]);
  }

  const onClickBtnFavorite = () => {
    setFavoriteIsOpened(!favoriteIsOpened);
    setSearchFieldValue('');
  }

  const addToFavoriteFunction = (favoriteItem) => {
    favoriteItems.filter((item) => item.albumName.toLowerCase().includes(favoriteItem.albumName.toLowerCase())).length > 0 ? setFavoriteItems((prev) => prev.filter((item) => item.albumName !== favoriteItem.albumName)) : setFavoriteItems(prev => [...prev, favoriteItem]);
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
      <Header onClickLogo={() => setFavoriteIsOpened(false)} onClickCart={() => setCartIsOpened(true)} onClickFavorite={() => onClickBtnFavorite()} headerData={headerData}/>
      <MainShell addToCartFunction={addToCartFunction} addToFavoriteFunction={addToFavoriteFunction} headerData={searchFieldValue} favoriteOpenStatus={favoriteIsOpened} favoriteItemsList={favoriteItems} onBtnClearFavorites={() => setFavoriteItems([])} />
      <ArrowIcon />
    </div>
  );
}

