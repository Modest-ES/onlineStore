import React from 'react';
import Header from './components/Header.js';
import CartOverlayShell from './components/CartOverlayShell.js';
import ArrowIcon from './components/ArrowIcon.js';
import MainShell from './components/MainShell.js';

export default function App() {
  const [cartIsOpened, setCartIsOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
 
  const mainShellData = (shellData) => {
    setCartItems(prev => [...prev, shellData]);
  }
  return (
    <div className="wrapper clear">
      {cartIsOpened && <CartOverlayShell onClickBtnBack={() => setCartIsOpened(false)} items={cartItems} />}
      <Header onClickCart={() => setCartIsOpened(true)} />
      <MainShell mainShellData={mainShellData}/>
      <ArrowIcon />
    </div>
  );
}

