import Promotion from '../../components/Promotion/Promotion';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Promotion />
            <Carousel />
            <Categories />
            <Products
                category={{
                    id: 0,
                    img: '',
                    title: '',
                    category: '',
                }}
                filters={{
                    productTitle: '',
                    productColor: [],
                }}
                sort={''}
            />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
