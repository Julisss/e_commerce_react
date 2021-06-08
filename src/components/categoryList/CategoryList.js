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
                    id: 'qwe1',
                    linkUrl: 'hats'
                },
                {
                    name: 'men',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 'qwe2',
                    linkUrl: 'men'
                },
                {
                    name: 'womens',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 'qwe3',
                    linkUrl: 'womens'
                },
                {
                    name: 'sneakers',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    size: 'large',
                    id: 'qwe4',
                    linkUrl: 'sneakers'
                },
                {
                    name: 'jackets',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'large',
                    id: 'qwe5',
                    linkUrl: 'jackets'
                },
            ]
        }
    }

    render() {
        return (
            <ul className="category-list">
                {this.state.categories.map( ({id, ...otherSectionParam}) => {
                    return (
                        <CategoryItem key={id} {...otherSectionParam}/>
                    )
                })}
            </ul>
        )
    }
}

export default CategoryList;