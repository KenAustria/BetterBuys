import Promotion from '../../components/Promotion/Promotion';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';

const Home = () => {
  return (
    <div>
      <Promotion />
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
