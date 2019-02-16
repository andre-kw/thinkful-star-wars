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
    this.setState({
      searched: false,
      searchQuery: '',
      searchCategory: ''
    });
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
        this.setState({
          loading: false,
          searchResults: json.results
        });
      })
      .catch(err => {
        this.setState({error: err.message});
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
          clearSearch={this.clearSearch} />
      </main>
    );
  }
}

export default App;
