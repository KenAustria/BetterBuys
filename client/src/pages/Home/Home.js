import Promotion from '../../components/Promotion/Promotion';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Promotion />
			<Carousel />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
