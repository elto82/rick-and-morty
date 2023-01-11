import c from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={c.card}>
      <button className={c.cardbutton} onClick={props.onClose}>
        💀
      </button>
      <img className={c.cardimage} src={props.image} alt={props.name} />
      <h2 className={c.cardtitle}>{props.name}</h2>
      <h3 className={c.cardsubtitle}>
        {props.species} 😎 {props.gender}
      </h3>
    </div>
  );
}
