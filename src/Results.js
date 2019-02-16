import React from 'react';

export default class Results extends React.Component {
  render() {
    let classname = (this.props.searched) ? 'results' : 'results hidden';
    let jsx = '';

    if(this.props.error) {
      jsx = (
        <p className="errMsg">There was an error. Please try again.</p>
      );
    } else if(this.props.loading) {
      jsx = (
        <p className="loaderMsg">Pinging the star wars database...</p>
      );
    } else {
      jsx = (
        <>
        <button className="clearSearch" onClick={() => this.props.clearSearch()}>Clear search</button>
        <ul>
          {this.props.results.map(r => <li>{r.name}</li>)}
        </ul>
        </>
      );
    }

    return (
      <section className={classname}>
        {jsx}
      </section>
    );
  }
}