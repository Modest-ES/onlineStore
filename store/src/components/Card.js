export default function Card(props) {
    return(
        <div className="card">
            <div className="card-top">
                <img src={props.albumCover} alt="Обложка альбома" className="album-image" />
                <h3>{props.albumName}</h3>
            </div>
            <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>${props.albumPrice}</b>
                </div>
                <div>
                  <button onClick={props.onClickFavorite}>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5" onClick={props.onClickPlus}>
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
        </div>
    );
}