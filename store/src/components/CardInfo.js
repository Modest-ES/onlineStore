export default function CardInfo({albumCover, albumName, albumPrice, albumDescription, onClickBtnBack, onClickPlus, onClickFavorite}) {
      return(
          <div className="card-info-overlay-shell">
            <div className="card-info-overlay-shadow" onClick={onClickBtnBack}>
            </div>
          <div className="card-info-overlay">
            <div className="card-info-left-side">
              <div className="card-info-image">
                <img src={albumCover} alt={albumName} title={albumName} />
              </div>
              <h3>{albumName}</h3>
              <h4>{albumPrice}</h4>
            </div>
            <div className="card-info-right-side">
              <h4>Описание:</h4>
              <p>{albumDescription}</p>
              <button className="d-flex align-center" onClick={onClickFavorite}>
                <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                Добавить в избранное
              </button>
              <button className="d-flex align-center" onClick={onClickPlus}>
                <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                Добавить в корзину
              </button>
            </div>              
          </div>
        </div>
      );
  }