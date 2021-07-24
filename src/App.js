import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/searchbox.js';
import './App.css';

class App extends Component {

  constructor() {
    /* calls constructor() method on the component class */
    /* Gives access to this.state */
    super();
    /* Here we initialize a value for the default */
    this.state = {
      people: [],
      searchField: ''
    };
  }

  /* We set our state to the 'users' we fetched */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users =>  this.setState({ people: users}));
  }

  handleChange = (element) => {
    this.setState({ searchField: element.target.value})
  }

  render() {
    const { people, searchField } = this.state;

    const filteredPeople = people.filter(people => people.name.toLowerCase().includes(searchField.toLowerCase()) )

    return (<div className="App">
      <h1>Robo Search</h1>
      <SearchBox placeholder="search robots" handleChange={this.handleChange} />
      <div className="list_container">
        <CardList people={filteredPeople}/>
      </div>
    </div>
    );
  }
}

export default App;