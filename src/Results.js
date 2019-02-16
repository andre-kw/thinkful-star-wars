import React from 'react';

export default class Results extends React.Component {
  render() {
    let classname = (this.props.searched) ? 'results' : 'results hidden';

    return (
      <section className={classname}>
        <button onClick={() => this.props.clearSearch()}>Clear search</button>
        <ul>
          <li>result</li>
        </ul>
      </section>
    );
  }
}