import Button from "../Button/Button";
import "./card.css";

// const Card = () => {
//     return <div className="card">
//     <Button/>
//     </div>; 
// };

// export default Card;

const Card = (props) => {
    console.log("props", props);
    return <div className="card">{props.title}
    <Button/>
    </div>; 
};

export default Card;