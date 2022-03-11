import Annoucement from "../components/Annoucement";
import Catergories from "../components/Catergories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Catergories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
