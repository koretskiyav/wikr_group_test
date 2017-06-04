import React, { Component } from 'react';
import './Footer.css';

const date = new Date();
const curentYear = date.getUTCFullYear();

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <span>© {curentYear} gudvin</span>
      </footer>
    )
  }
}
