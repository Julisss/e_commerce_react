import React from 'react';
import CategoryList from '../../components/categoryList/CategoryList';
import './HomePage.scss'

const HomePage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <div className="container">
                <CategoryList />
            </div>
        </div>
    )
}

export default HomePage;