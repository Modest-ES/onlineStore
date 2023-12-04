import React from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar.js';
import Card from './Card.js';
import BtnMore from './BtnMore.js';

export default function MainShell({addToCartFunction, addToFavoriteFunction, headerData, favoriteOpenStatus, favoriteItemsList, onBtnClearFavorites}) {
    const [items, setItems] = React.useState([]);
    const [contentIsLoading, setContentIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            axios.get('https://6564f1c3ceac41c0761f0d10.mockapi.io/items').then((response) => {
                setItems(response.data);
                setContentIsLoading(false);
            });
        }, 1);
    }, []);

    if (contentIsLoading) {
        return(
            <div className="main-shell">
                <NavigationBar />

                <h1>Загрузка</h1>
                <div className='content'>
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                    <Card isLoading={true} />
                </div>
            </div>
        );
    }

    // React.useEffect(() => {
    //     fetch('https://6564f1c3ceac41c0761f0d10.mockapi.io/items').then((res) => {
    //         return res.json();
    //     }).then((json) => {
    //         setItems(json);
    //     })
    // }, []);

    return(
        <div className="main-shell">
            {/* <div>
                <ul>
                    {items[0][0].albumTracklist.map((item) => <li>{item}</li>)}
                </ul>
            </div> */}
            {favoriteOpenStatus && !(headerData) && 
            <div className='d-flex align-center justify-between'>
                <h1>Избранное</h1>
                {favoriteItemsList.length > 0 && <button className='btn-more' onClick={onBtnClearFavorites}><h3>Очистить</h3></button>}
            </div>
            }
            {!(headerData) && favoriteOpenStatus && favoriteItemsList.length < 1 && 
            <h4>
                В избранное не добавлено ни одного альбома
            </h4>
            }
            {favoriteOpenStatus && headerData && favoriteItemsList.length > 0 && <h1>Поиск в избранном по запросу: "{headerData}"</h1>}
            {headerData && favoriteOpenStatus && 
            <div className='content'>
            {
                favoriteItemsList.filter((item) => item.albumName.toLowerCase().includes(headerData.toLowerCase())).map((item) => (
                    <Card 
                    key={item.albumName}
                    albumCover={item.albumCover} 
                    albumName={item.albumName} 
                    albumPrice={item.albumPrice}  
                    onClickFavorite={() => addToFavoriteFunction(item)}
                    onClickPlus={() => addToCartFunction(item)}
                    favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false } />
                ))
            }
        </div>}
            {!(headerData) && favoriteOpenStatus && 
                <div className='content'>
                    {
                        favoriteItemsList.map((item) => (
                            <Card 
                            key={item.albumName}
                            albumCover={item.albumCover} 
                            albumName={item.albumName} 
                            albumPrice={item.albumPrice}  
                            onClickFavorite={() => addToFavoriteFunction(item)}
                            onClickPlus={() => addToCartFunction(item)}
                            favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false } />
                        ))
                    }
                </div>}

            {!(headerData) && !favoriteOpenStatus && <NavigationBar />}

            {headerData ? <h1>Поиск по запросу: "{headerData}"</h1> : <div></div>}
            {headerData && 
                <div className="content">
                    {
                        items.map((category) => (
                            category.filter((item) => item.albumName.toLowerCase().includes(headerData.toLowerCase())).map((item) => (
                                <Card 
                                key = {item.albumName}
                                albumCover={item.albumCover} 
                                albumName={item.albumName} 
                                albumPrice={item.albumPrice}  
                                onClickFavorite={() => addToFavoriteFunction(item)}
                                onClickPlus={() => addToCartFunction(item)} 
                                favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false }/>
                            ))
                        ))
                    }
                </div>
            }
            {!(headerData) && !favoriteOpenStatus && 
            
            <div>
                {items[0].length > 0 && 
                <>
                <h1 id="best-sellers">Популярные альбомы</h1>
                <div className="content">
                    {items[0].map( (item) => (
                        <Card 
                        key = {item.albumName}
                        albumCover={item.albumCover} 
                        albumName={item.albumName} 
                        albumPrice={item.albumPrice}  
                        onClickFavorite={() => addToFavoriteFunction(item)}
                        onClickPlus={() => addToCartFunction(item)} 
                        favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false }/>
                    ))}
                    <div className="btn-more-block">
                        <BtnMore />
                    </div>
                </div>
                </>}

                {items[1].length > 0 && 
                <>
                <h1 id="hip-hop-records">Хип-Хоп альбомы</h1>
                <div className="content">
                    {items[1].map( (item) => (
                        <Card 
                        key = {item.albumName}
                        albumCover={item.albumCover} 
                        albumName={item.albumName} 
                        albumPrice={item.albumPrice}  
                        onClickFavorite={() => addToFavoriteFunction(item)}
                        onClickPlus={() => addToCartFunction(item)} 
                        favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false }/>
                    ))}
                    <div className="btn-more-block">
                        <BtnMore />
                    </div>
                </div>
                </>}

                {items[2].length > 0 && 
                <>
                <h1 id="rnb-records">RnB альбомы</h1>
                <div className="content">
                    {items[2].map( (item) => (
                        <Card 
                        key = {item.albumName}
                        albumCover={item.albumCover} 
                        albumName={item.albumName} 
                        albumPrice={item.albumPrice}  
                        onClickFavorite={() => addToFavoriteFunction(item)}
                        onClickPlus={() => addToCartFunction(item)} 
                        favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false }/>
                    ))}
                    <div className="btn-more-block">
                        <BtnMore />
                    </div>
                </div>
                </>}
                
                {items[3].length > 0 && 
                <>
                <h1 id="pop-records">Поп альбомы</h1>
                <div className="content">
                    {items[3].map( (item) => (
                        <Card 
                        key = {item.albumName}
                        albumCover={item.albumCover} 
                        albumName={item.albumName} 
                        albumPrice={item.albumPrice}  
                        onClickFavorite={() => addToFavoriteFunction(item)}
                        onClickPlus={() => addToCartFunction(item)} 
                        favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false }/>
                    ))}
                    <div className="btn-more-block">
                        <BtnMore />
                    </div>
                </div>
                </>}
                
                {items[4].length > 0 && 
                <>
                <h1 id="soul-records">Соул альбомы</h1>
                <div className="content">
                    {items[4].map( (item) => (
                        <Card 
                        key = {item.albumName}
                        albumCover={item.albumCover} 
                        albumName={item.albumName} 
                        albumPrice={item.albumPrice}  
                        onClickFavorite={() => addToFavoriteFunction(item)}
                        onClickPlus={() => addToCartFunction(item)} 
                        favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false }/>
                    ))}
                    <div className="btn-more-block">
                        <BtnMore />
                    </div>
                </div>
                </>}
                
                {items[5].length > 0 && 
                <>
                <h1 id="instrumental-records">Инструментальные альбомы</h1>
                <div className="content">
                    {items[5].map( (item) => (
                        <Card 
                        key = {item.albumName}
                        albumCover={item.albumCover} 
                        albumName={item.albumName} 
                        albumPrice={item.albumPrice} 
                        onClickFavorite={() => addToFavoriteFunction(item)}
                        onClickPlus={() => addToCartFunction(item)} 
                        favoriteStatus={favoriteItemsList.filter((obj) => obj.albumName.toLowerCase().includes(item.albumName.toLowerCase())).length > 0 ? true : false }/>
                    ))}
                    <div className="btn-more-block">
                        <BtnMore />
                    </div>
                </div>
                </>}

                
            </div>}




        </div>
    );
}