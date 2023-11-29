export default function Card({albumCover, albumName, albumPrice, onClickFavorite, onClickPlus}) {
    return(
        <div className="card">
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
                  <button onClick={onClickFavorite}>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5" onClick={onClickPlus}>
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
        </div>
    );
}