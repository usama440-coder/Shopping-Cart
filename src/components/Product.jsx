import "../App.css";
import { useDispatch } from "react-redux";
import { add } from "../redux/slice/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productContainer">
      <img className="productImage" src={product.image} alt="product" />
      <p className="productTitle">{product.title}</p>
      <p className="productPrice">${product.price}</p>
      <button className="addBtn" onClick={() => handleAdd(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
