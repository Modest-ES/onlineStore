import React from 'react';

export default function Header({onClickLogo, onClickCart, onClickFavorite, headerData}) {
  const [searchValue, setSearchValue] = React.useState('');
  const onChangeSearchFieldValue = (event) => {
    setSearchValue(event.target.value);
    headerData(event.target.value);
  }
  const clearSearchValue = () => {
    setSearchValue('');
    headerData('');
  }
    return(
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center header-left" onClick={onClickLogo}>
              <img width={40} height={40} src="./misc/logoalbum.png" alt="Logo" className="logo-album"/>
              <div className="logo-text"> 
                <h3 className="yellow-text">ALBUM STORE</h3>
                <p>Музыкальные альбомы на заказ</p>
              </div>
            </div>
            <div className="search-block">
              <input onChange={onChangeSearchFieldValue} value={searchValue} placeholder="Поиск..." className="search-field">
              </input>
              {searchValue && <img width={18} height={18} src="./misc/btn-delete.png" alt="Очистить поиск" title="Очистить поиск" className="search-button" onClick={() => clearSearchValue()} />}
              {!(searchValue) && <img width={18} height={18} src="./misc/Search.svg" alt="Поиск" title="Введите запрос в поисковую строку" className="search-button" />}
            </div>
            <div className="header-right">
              <img src="./misc/favorites.png" alt="Избранное" title="Избранное" className="header-right-btn" onClick={() => {clearSearchValue(); onClickFavorite()}}/>
              <img src="./misc/cart1.svg" alt="Корзина" title="Корзина" className="ml-5 header-right-btn" onClick={onClickCart} />
              <span className="ml-10 mr-10 cu-p" onClick={onClickCart}>СуммаТоваров</span>
              <img src="./misc/user1.svg" alt="Профиль" title="Профиль" className="header-right-btn" />
            </div>
        </header>
    );
}