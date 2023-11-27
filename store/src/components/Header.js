export default function Header(props) {
    return(
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center header-left">
              <img width={40} height={40} src="./misc/logoalbum.png" alt="Logo" className="logo-album"/>
              <div className="logo-text"> 
                <h3 className="yellow-text">ALBUM STORE</h3>
                <p>Музыкальные альбомы на заказ</p>
              </div>
            </div>
            <div className="search-block">
              <input placeholder="Поиск..." className="search-field">
              </input>
              <img src="./misc/Search.svg" alt="Поиск" title="Найти" className="search-button" />
            </div>
            <div className="header-right">
              <img src="./misc/favorites.png" alt="Избранное" title="Избранное" className="header-right-btn"/>
              <img src="./misc/cart1.svg" alt="Корзина" title="Корзина" className="ml-5 header-right-btn" onClick={props.onClickCart} />
              <span className="ml-10 mr-10 cu-p" onClick={props.onClickCart}>Баланс</span>
              <img src="./misc/user1.svg" alt="Профиль" title="Профиль" className="header-right-btn" />
            </div>
        </header>
    );
}