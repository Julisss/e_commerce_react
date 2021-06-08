import React from 'react';
import './CategoryItem.scss'

const CategoryItem = ({name, imgUrl, size}) => {
    return (
        <li className={`${size} category-item`}>
            <div className="background-image"
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            />
            <div className="content">
                <h2 className="title">{name}</h2>
                <p className="desciption">Some text description</p>
            </div>
        </li>
    )
}

export default CategoryItem