import React from 'react'

class Tickler extends React.Component {

  tickle = () => {
    console.log('Tee hee!');
  }

  render() {
    return (
      <button onClick={this.tickle}>Tickle me!</button>
    );
  }
}
