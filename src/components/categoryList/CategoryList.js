import React from 'react';
import CategoryItem from '../categoryItem/CategoryItem';
import './CategoryList.scss'

class CategoryList extends React.Component {
    constructor() {
        super();

        this.state = {
            categories: [
                {
                    name: 'hats',
                    imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 'qwe1'
                },
                {
                    name: 'men',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 'qwe2'
                },
                {
                    name: 'womens',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 'qwe3'
                },
                {
                    name: 'sneakers',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    size: 'large',
                    id: 'qwe4'
                },
                {
                    name: 'jackets',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'large',
                    id: 'qwe5'
                },
            ]
        }
    }

    render() {
        return (
            <ul className="category-list">
                {this.state.categories.map( ({name, imgUrl, id, size}) => {
                    return (
                        <CategoryItem name={name} imgUrl={imgUrl} key={id} size={size} />
                    )
                })}
            </ul>
        )
    }
}

export default CategoryList;