import "./styles/cartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const cartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
            <div className="qty-display">0</div>
        </div>
    )
}

export default cartWidget