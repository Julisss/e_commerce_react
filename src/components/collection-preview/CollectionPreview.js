import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h2>{title.toUpperCase()}</h2>
            <ul className="preview-list">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...item}) => (
                        <CollectionItem key={id} {...item} />
                ))}
            </ul>
        </div>
    )
}

export default CollectionPreview