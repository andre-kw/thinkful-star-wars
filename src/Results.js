import React from 'react';
import Result from './Result';

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    let category = '';
  }

  componentDidUpdate() {
    this.category = this.props.searchCategory;
  }

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
          {this.props.results.map((r, index) => <Result key={index} item={r} type={this.category} data={this.props.data} />)}
          {(this.props.results.length === 0) ? <p>Didn't find anything</p> : ''}
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