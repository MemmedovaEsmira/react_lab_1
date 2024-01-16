import Button from "../Button/Button";
import "./card.css";


const Card = (props) => {
    console.log("props", props);
    return (
        <div className="card">
            <div className="card_title">{props.title }</div>
            <div className="card_price">{props.price }</div>

            <Button/>
        </div>
    )
};

export default Card;