/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart, decreaseCartItem, increaseCartItem, removeFromCart } from "../redux/cartSlice";
import { Badge, Button, Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { useLocation } from "react-router-dom";

const ProductItem = ({product}) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert("Producto añadido al carrito" )
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
        alert("Producto eliminado del carrito" )
    }

    const handleDecreaseItem = () => {
        dispatch(decreaseCartItem(product));
    }

    const handleIncreaseItem = () => {
        dispatch(increaseCartItem(product));
    }

    let decrease = <Button variant="default" onClick={product.quantity !== 1 ? handleDecreaseItem : handleRemoveFromCart}>-</Button>
    let increase = <Button variant="default" onClick={handleIncreaseItem}>+</Button>

    return (
        <div className="producto">
            <Card>
                <Card.Img variant="top" src={product.image}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
                {location.pathname !== "/cart" ? <Button variant="primary" onClick={handleAddToCart}>Añadir</Button>
                : <Button variant="danger" onClick={handleRemoveFromCart}>Eliminar</Button>}
                <Card.Footer>
                    <Rating
                    initialValue={product.rating.rate}
                    readonly />
                    {location.pathname === "/cart" ? decrease: ""}
                    {location.pathname === "/cart" ? <Badge bg="secondary">{product.quantity}</Badge>: ""}
                    {location.pathname === "/cart" ? increase: ""}
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProductItem;