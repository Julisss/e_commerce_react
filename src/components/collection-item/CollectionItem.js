import React from 'react';
import './CollectionItem.scss'

const CollectionItem = ({name, imageUrl, price}) => (
    <li className="preview-item" >
        <div 
            className="backgound-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </li>
)

export default CollectionItem