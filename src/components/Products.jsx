import "../App.css";
import { useEffect } from "react";
import Product from "./Product";
import { fetchProducts } from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.product);
  const products = data;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="productsContainer">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })
      )}
    </div>
  );
};

export default Products;
