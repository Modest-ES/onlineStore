import React from 'react';
import Card from './Card.js';
import BtnMore from './BtnMore.js';

export default function ProductList ({ items, addToCartFunction, addToFavoriteFunction, favoriteItemsList}) {

  const defaultDisplayedItemsAmount = 5;
  const [visibleItems, setVisibleItems] = React.useState(defaultDisplayedItemsAmount);
  const displayMoreItems = () => {
    setVisibleItems(items.length);
  };

  return (
    <div className="content">
        {items.slice(0, visibleItems).map( (item) => (
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
            <BtnMore onClick={displayMoreItems} />
        </div>
    </div>
  );
};