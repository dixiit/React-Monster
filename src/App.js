import './App.css';

import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ monster: user }))
  }

  HandleChange = e => {
    this.setState({searchField : e.target.value})
  }

  render() {
    const { monster, searchField } = this.state
    const FilteredMonster = monster.filter(
      monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <SearchBox placeholder='search Monster' HandleChange={this.HandleChange} />
        <CardList monster={FilteredMonster} />
      </div>
    );
  }
}

export default App;
