// TO DO LIST

// 1 - рефакторинг кода под useContext
// 2 - подсчет суммы цен товаров в корзине (в хедере и над кнопкой заказа в корзине)
// 3 - BtnMore (рендеринг (скрытие / разворачивание) части / полного списка товаров по каждой категории с нажатия кнопки под товарами)
// 4 - добавление нескольких одинаковых товаров в формате 2х,3х... с кнопками + и - (реализация с помощью глобального (контекстного?) массива cartItems с парами вида [cartItem, amount]) 
// 5 - оформление заказа / отправка данных о заказе на бэкенд в MockAPI
// 6 - отображение всех заказов в окне по клику на иконку профиля
// 7 - фильтр товаров по ценам (интервал через слайдер, синхронизированный с текстовыми полями Min & Max значений цен)
// [[8 : Сделано]] - обновление двумерного массива с товарами на MockAPI: добавление деталей о товарах (дата релиза, треклист, длительность альбома)
// 9 - отображение деталей товара по клику на обложку в карточке
// 10 - анимации для плавного рендера корзины и других бинарно рендерящихся компонентов
// 11 - адаптация верстки под телефон / мониторы разной ширины

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

