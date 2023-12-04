import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import ProductItem from "../components/ProductItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.items.length === 0 ? (
        <div><h1 className="text-black">Cesta vacio</h1></div>
      ) : (
        <div>
            <h1 className="text-black">Cesta</h1>
            <Row className="justify-content-center">
                {cart.items.map((item) => (
                    <ProductItem key={item.id} product={item}/>
                ))}
            </Row>
            <h2 className="text-black">Total: ${cart.totalAmount.toFixed(2)}</h2>
        </div>
      )}
    </>
  );
};

export default Cart;