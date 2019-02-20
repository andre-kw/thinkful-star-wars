import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Results from './Results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      searched: false,
      searchCategory: 'planets',
      searchQuery: '',
      searchResults: []
    }
  }

  updateQuery = (e) => { this.setState({searchQuery: e.target.value}); }
  updateCategory = (e) => { this.setState({searchCategory: e.target.value}); }

  clearSearch = () => {
    let q = document.getElementById('query');
    q.value = '';
    q.focus();

    this.setState({searched: false, searchQuery: ''});
  }

  runSearch = (e) => {
    e.preventDefault();
    this.setState({
      searched: true,
      loading: true
    });

    fetch(`https://swapi.co/api/${this.state.searchCategory}/?search=${this.state.searchQuery}`)
      .then(res => res.json())
      .then(json => {
        let results = json.results.sort((a, b) => {
          let x = a.name || a.title;
          let y = b.name || b.title;

          return x > y ? 1 : x === y ? 0 : -1;
        });

        this.setState({
          loading: false,
          searchResults: results
        });
      })
      .catch(err => {
        this.setState({error: err.message});
      });
  }

  componentDidMount() {
    Promise.all([
      fetch('https://swapi.co/api/species/').then(res => res.json()),
      fetch('https://swapi.co/api/planets/').then(res => res.json())
    ])
    .then(([species, homeworld]) => {
      // do all of our stuff in here
      this.setState({
        data: {
          species: species.results,
          homeworld: homeworld.results
        }
      });
    });
  }

  render() {
    return (
      <main>
        <SearchForm 
          searched={this.state.searched}
          updateQuery={this.updateQuery}
          updateCategory={this.updateCategory}
          runSearch={this.runSearch} />
        <Results
          loading={this.state.loading}
          searched={this.state.searched}
          error={this.state.error}
          results={this.state.searchResults}
          clearSearch={this.clearSearch}
          searchCategory={this.state.searchCategory}
          data={this.state.data} />
      </main>
    );
  }
}

export default App;
