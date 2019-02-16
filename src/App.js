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
      searchCategory: '',
      searchQuery: '',
    }
  }

  updateInput = (e) => {
    this.setState({searchQuery: e.target.value});
  }

  clearSearch = () => {
    this.setState({
      searched: false,
      searchQuery: '',
      searchCategory: ''
    });
  }

  runSearch = (e) => {
    e.preventDefault();
    this.setState({searched: true});
  }

  render() {
    return (
      <main>
        <SearchForm 
          searched={this.state.searched}
          updateInput={this.updateInput}
          runSearch={this.runSearch} />
        <Results
          searched={this.state.searched}
          clearSearch={this.clearSearch} />
      </main>
    );
  }
}

export default App;
