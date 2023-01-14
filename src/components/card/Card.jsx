import c from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={c.card}>
      <button className={c.cardbutton} onClick={props.onClose}>
        💀
      </button>
      <img className={c.cardimage} src={props.image} alt={props.name} />
      <Link to={`/detail/${props.id}`}>
        <h2 className={c.cardtitle}>{props.name}</h2>
      </Link>
      <h3 className={c.cardsubtitle}>
        {props.species} 😎 {props.gender}
      </h3>
    </div>
  );
}
