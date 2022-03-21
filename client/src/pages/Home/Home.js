import Promotion from '../../components/Promotion/Promotion';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <div>
      <Promotion />
      <Navbar />
      <Carousel />
      <Categories />
    </div>
  );
};

export default Home;
