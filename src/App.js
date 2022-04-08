import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // constructor runs first and initializes the state
    this.state = {
      champions: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json"
    )
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          // Object.values helps when receiving an object instead of an array
          return { champions: Object.values(users.data) };
        })
      );
  }

  onSearchChange = (e) => {
    // filtering over champs name to find names that include user search
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { champions, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredChampions = champions.filter((champion) => {
      return champion.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">LOL Champions</h1>
        <SearchBox
          onChange={onSearchChange}
          placeholder="search champions"
          className="search-box"
        />
        <CardList champions={filteredChampions} />
      </div>
    );
  }
}

export default App;
