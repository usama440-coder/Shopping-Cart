import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="cartContainer">
      <h1 className="homeTitle">Cart</h1>
      {products.map((product) => {
        return (
          <div key={product.id} className="cartProductContainer">
            <div className="cartProductDescription">
              <img className="cartProductImage" src={product.image} alt="" />
              <p className="cartProductTitle">{product.title}</p>
              <h4 className="cartProductPrice">${product.price}</h4>
            </div>
            <button className="addBtn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
