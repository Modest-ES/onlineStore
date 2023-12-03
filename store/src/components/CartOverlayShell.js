import React from 'react';

export default function CartOverlayShell({onClickBtnBack, items, onClickBtnDelete, onBtnClearCart}) {
  const [totalPrice, setTotalPrice] = React.useState(0);
    return(
        <div className="cart-overlay-shell">
          <div className="cart-overlay-shadow" onClick={onClickBtnBack}>
          </div>
        <div className="cart-overlay">
            <div className="cart-title">
              <div className="d-flex align-center">
                <button className="btn-back" onClick={onClickBtnBack}>
                  <img width={32} height={32} src="./misc/btn-back.png" alt="Вернуться" title="Вернуться" />
                </button>
                <h3>Корзина</h3>
              </div>
              {items.length > 0 && 
              <button className="btn-clear-cart" onClick={onBtnClearCart}>
                <h4>Очистить</h4>
              </button>}
            </div>

            {items.length < 1 &&
            <div className="empty-cart-message">
              <h1>Пусто</h1>
              <div className="centered-block">
                <b>Добавьте в корзину заинтересовавшие вас альбомы с помощью кнопки:</b>
              </div>
              <div className="centered-block">
                <button>
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>}

            {items.length > 0 &&
            <div className="cart-content">
            {
              items.map((item) => (
                <div className="cart-item" key={item.albumName}>
                  <div className="cart-item-info">
                    <img src={item.albumCover} alt={item.albumName} title={item.albumName} className="cart-item-cover" />
                    <div>
                      <h4>{item.albumName}</h4>
                      <b>${item.albumPrice}</b>
                    </div>
                  </div>
                  <button className="cart-btn-delete">
                    <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" onClick={() => onClickBtnDelete(item.albumName)} />
                  </button>
                </div>
              ))
            }
          </div>} 
          {items.length > 0 &&
          <div className="cart-bottom">
          <div className="cart-total">
            <b>Итого:</b>
            <div className="dashline"></div>
            <b>${totalPrice}</b>
          </div>
          <div className="cart-total">
            <b>НДС (13%):</b>
            <div className="dashline"></div>
            <b>Сумма</b>
          </div>
          <button className="cart-btn-order">
            <h2>Оформить заказ</h2>
          </button>
        </div>}
        </div>
      </div>
    );
}