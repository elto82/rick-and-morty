import c from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions.js";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  };

  /* useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]); */

  useEffect(() => {
    for (let i = 0; i < props.myFavorites.length; i++) {
      if (props.myFavorites[i].id === props.id) {
        setIsFav(true);
        break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myFavorites]);

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
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (characterId) => dispatch(removeFavorite(characterId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
