import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    let classname = (this.props.searched) ? 'searchForm minimized' : 'searchForm';

    return (
      <section className={classname}>
        <header>
          <h1>Star Wars Search</h1>
        </header>
        
        <form onSubmit={this.props.runSearch}>
          <input type="text" onChange={(e) => this.props.updateInput(e)}></input>
          <button type="submit">Search</button>
        </form>
      </section>
    );
  }
}