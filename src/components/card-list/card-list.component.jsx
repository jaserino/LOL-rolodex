import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { champions } = this.props;

    return (
      <div className="card-list">
        {champions.map((champion) => {
          return <Card key={champion.id} champion={champion} />;
        })}
      </div>
    );
  }
}

export default CardList;
