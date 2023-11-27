export default function CartOverlayShell(props) {
    return(
        <div className="cart-overlay-shell">
          <div className="cart-overlay-shadow" onClick={props.onClickBtnBack}>
          </div>
        <div className="cart-overlay">
            <div className="cart-title">
              <button className="btn-back" onClick={props.onClickBtnBack}>
                <img width={32} height={32} src="./misc/btn-back.png" alt="Вернуться" title="Вернуться" />
              </button>
              <h3>Корзина</h3>
            </div>
            <div className="cart-content">
              <div className="cart-item">
                <div className="cart-item-info">
                  <img src="./misc/albums/denzelcurry_zuu.png" alt="ItemImage" title="ItemImage" className="cart-item-cover" />
                  <div>
                    <h4>Denzel Curry - ZUU</h4>
                    <b>$29.99</b>
                  </div>
                </div>
                <button className="cart-btn-delete">
                  <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" />
                </button>
              </div>

              <div className="cart-item">
                <div className="cart-item-info">
                  <img src="./misc/albums/boldyjamesthealchemist_thepriceofteainchina.png" alt="ItemImage" title="ItemImage" className="cart-item-cover" />
                  <div>
                    <h4>Boldy James & The Alchemist - The Price of Tea in China</h4>
                    <b>$41.99</b>
                  </div>
                </div>
                <button className="cart-btn-delete">
                  <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" />
                </button>
              </div>

              <div className="cart-item">
                <div className="cart-item-info">
                  <img src="./misc/albums/keykennybeats_777.png" alt="ItemImage" title="ItemImage" className="cart-item-cover" />
                  <div>
                    <h4>KEY! & Kenny Beats - 777</h4>
                    <b>$19.99</b>
                  </div>
                </div>
                <button className="cart-btn-delete">
                  <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" />
                </button>
              </div>

              <div className="cart-item">
                <div className="cart-item-info">
                  <img src="./misc/albums/amine_limbo.png" alt="ItemImage" title="ItemImage" className="cart-item-cover" />
                  <div>
                    <h4>Amine - Limbo</h4>
                    <b>$30.99</b>
                  </div>
                </div>
                <button className="cart-btn-delete">
                  <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" />
                </button>
              </div>

              <div className="cart-item">
                <div className="cart-item-info">
                  <img src="./misc/albums/kerokerobonito_bonitogeneration.png" alt="ItemImage" title="ItemImage" className="cart-item-cover" />
                  <div>
                    <h4>Kero Kero Bonito - Bonito Generation</h4>
                    <b>$49.99</b>
                  </div>
                </div>
                <button className="cart-btn-delete">
                  <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" />
                </button>
              </div>

              <div className="cart-item">
                <div className="cart-item-info">
                  <img src="./misc/albums/babytron_lukatroncic.png" alt="ItemImage" title="ItemImage" className="cart-item-cover" />
                  <div>
                    <h4>BabyTron - Luka Troncic</h4>
                    <b>$18.99</b>
                  </div>
                </div>
                <button className="cart-btn-delete">
                  <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" />
                </button>
              </div>

              <div className="cart-item">
                <div className="cart-item-info">
                  <img src="./misc/albums/currensy_pilottalk.png" alt="ItemImage" title="ItemImage" className="cart-item-cover" />
                  <div>
                    <h4>Curren$y - Pilot Talk</h4>
                    <b>$26.99</b>
                  </div>
                </div>
                <button className="cart-btn-delete">
                  <img src="./misc/btn-delete.png" alt="Удалить товар" title="Удалить товар" />
                </button>
              </div>

            </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <b>Итого:</b>
              <div className="dashline"></div>
              <b>Сумма</b>
            </div>
            <div className="cart-total">
              <b>Комиссия (5%):</b>
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