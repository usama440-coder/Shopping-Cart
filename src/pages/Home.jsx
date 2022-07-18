import "../App.css";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">Products</h1>
      <Products />
    </div>
  );
};

export default Home;
