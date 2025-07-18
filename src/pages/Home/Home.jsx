import React from 'react';
import Banner from './Banner';
import FeaturedFoods from './FeaturedFoods';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <div>
                <Banner></Banner>
            </div>
            {/* Featured Foods card */}
            <div>
                <FeaturedFoods></FeaturedFoods>
            </div>
        </div>
    );
};

export default Home;