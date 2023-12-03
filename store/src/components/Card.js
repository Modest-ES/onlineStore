import React from 'react';
import ContentLoader from "react-content-loader";

export default function Card({albumCover, albumName, albumPrice, onClickFavorite, onClickPlus, favoriteStatus, isLoading=false}) {
  const [isFavorite, setIsFavorite] = React.useState(favoriteStatus);
  const onClickBtnFavorite = () => {
    setIsFavorite(!isFavorite);
    onClickFavorite(albumName);
  }
  return(
        <div className="card">
          {isLoading ? <ContentLoader 
            speed={3}
            width={175}
            height={292}
            viewBox="0 0 195 332"
            backgroundColor="#4b4b4b"
            foregroundColor="#535353"
          >
            <rect x="0" y="207" rx="10" ry="10" width="195" height="38" /> 
            <rect x="0" y="293" rx="10" ry="10" width="52" height="38" /> 
            <rect x="0" y="0" rx="10" ry="10" width="195" height="195" /> 
            <circle cx="175" cy="312" r="19" /> 
            <circle cx="130" cy="312" r="19" />
          </ContentLoader> :
            <>
            <div className="card-top">
                <img src={albumCover} alt="Обложка альбома" className="album-image" />
                <h3>{albumName}</h3>
            </div>
            <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>${albumPrice}</b>
                </div>
                <div className="d-flex">
                  <button onClick={() => onClickBtnFavorite()} style={favoriteStatus ? {background: "rgba(254, 211, 22, 0.3)"} : {background: "rgba(30, 30, 30, 0.5)"}} >
                    <img width={16} height={16} src={favoriteStatus ? "./misc/btn-heart-filled.png" : "./misc/btn-heart-empty.png"} alt="Статус избранного" title={favoriteStatus ? "Убрать из избранного" : "Добавить в избранное"} />
                    {/* <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" /> */}
                  </button>
                  <button className="ml-5" onClick={onClickPlus}>
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
            </>}
        </div>
    );
}