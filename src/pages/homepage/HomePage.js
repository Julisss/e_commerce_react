import React from 'react';
import CategoryList from '../../components/categoryList/CategoryList';
import './HomePage.scss'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="container">
                <CategoryList />
            </div>
        </div>
    )
}

export default HomePage;