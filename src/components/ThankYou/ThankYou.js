import React, { Component } from 'react';

import './ThankYou.css';

import thanks from '../../assets/thanks.gif';

console.log(thanks);
export default class ThankYou extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="thank-you">
        <img role="presentation" src={thanks} />
        <h3>Thank you for your purchase!</h3>
      </div>
    );
  }
}
