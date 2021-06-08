import React from 'react';
import {withRouter} from 'react-router-dom'
import './CategoryItem.scss'

const CategoryItem = ({name, imgUrl, size, linkUrl, match, history}) => {
    console.log(match)
    return (
        <li 
            className={`${size} category-item`}
            onClick={ () => history.push(`${linkUrl}`)}
        >
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

export default withRouter(CategoryItem)