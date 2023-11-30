export default function CardInfo({onClickBtnBack}) {
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
                <button className="btn-clear-cart">
                  <h4>Очистить</h4>
                </button>
              </div>
              <div className="cart-content">
                {
                  items.map((item) => (
                    <div className="cart-item">
                      <div className="cart-item-info">
                        <img src={item.albumCover} alt={item.albumName} title={item.albumName} className="cart-item-cover" />
                        <div>
                          <h4>{item.albumName}</h4>
                          <b>${item.albumPrice}</b>
                        </div>
                      </div>
                      <button className="cart-btn-delete">
                        <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" />
                      </button>
                    </div>
                  ))
                }
  
              </div>
            <div className="cart-bottom">
              <div className="cart-total">
                <b>Итого:</b>
                <div className="dashline"></div>
                <b>Сумма</b>
              </div>
              <div className="cart-total">
                <b>НДС (13%):</b>
                <div className="dashline"></div>
                <b>Сумма</b>
              </div>
              <button className="cart-btn-order">
                <h2>Оформить заказ</h2>
              </button>
            </div>
          </div>
        </div>
      );
  }