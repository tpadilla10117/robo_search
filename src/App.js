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
      people: [
        /* { name: "Drake", id: 'asc1'},
        { name: "Francis", id: 'asc2'}, 
        {name: "Dutch", id: 'asc3'} */
      ],
      searchField: ''
    };

    /* Context of 'this' here is explicitly stated: */
    /* this.handleChange = this.handleChange.bind(this); */
  }

  /* 1) fetch() lets us make an API request to the URL */
  /* 2) the fetch returns a promise, gives a response of the 'body' */
  /* 3) we indicate that we want json to be returned from the response, which gets returned as a new response */
  /* 4) We set our state to the 'users' we fetched */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users =>  this.setState({ people: users}));
  }

  /* arrow function lets us bind this (lexical scoping) */
  handleChange = (element) => {
    this.setState({ searchField: element.target.value})
  }

  render() {
    const { people, searchField } = this.state;

    const filteredPeople = people.filter(people => people.name.toLowerCase().includes(searchField.toLowerCase()) )

    return (<div className="App">
      <h1>Robots Rolodex</h1>
      <SearchBox placeholder="search robots" handleChange={this.handleChange} />
      <CardList people={filteredPeople}/>
     
      <header className="App-header">
       
        <button onClick={() => this.setState({ string: 'Hello My Boi!'})}>Change Text</button>
       
      </header>
    </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;