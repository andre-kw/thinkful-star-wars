import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    let classname = (this.props.searched) ? 'searchForm minimized' : 'searchForm';

    return (
      <section className={classname}>
        <header>
          <h1>Star Wars Search</h1>
          <small>a dope star wars utility made by andre willie</small>
        </header>
        
        <form onSubmit={this.props.runSearch}>
          <select onChange={(e) => this.props.updateCategory(e)}>
            <option value="planets">Planets</option>
            <option value="starships">Spaceships</option>
            <option value="vehicles">Vehicles</option>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
          </select>
          <input type="text" onChange={(e) => this.props.updateQuery(e)}></input>
          <button type="submit">Search</button>
        </form>
      </section>
    );
  }
}