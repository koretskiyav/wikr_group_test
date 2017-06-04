import React from 'react';
import Articles from 'components/Articles';
import Paginator from 'components/Paginator';
import './Posts.css';

export default () =>
  <div className="Posts">
    <Paginator />
    <Articles />
    <Paginator />
  </div>;
