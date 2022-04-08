import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, id } = this.props.champion;
    return (
      <div className="card-container">
        <img
          alt={name}
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
          style={{ width: "100%", height: "15vw", objectFit: "cover" }}
        />
        <h2 className="champ-font">{name}</h2>
      </div>
    );
  }
}

export default Card;
