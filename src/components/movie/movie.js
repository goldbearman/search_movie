import React, {Component} from "react";
// import { formatDistanceToNow } from "date-fns";
import {Rate} from 'antd';


import 'antd/dist/antd.css';
import "./movie.css"

import { Row, Col, Slider } from 'antd';
// import PropTypes from "prop-types";

export default class Movie extends Component {

  // static defaultProps = {
  //     label: "The task name",
  //     done: false,
  // };
  //
  // static propTypes = {
  //     label: PropTypes.string,
  //     id: PropTypes.number,
  //     onDeleleted: PropTypes.func,
  //     done: PropTypes.bool,
  //     onToggleDone: PropTypes.func,
  // };

  render() {
    // eslint-disable-next-line react/prop-types
    // const { label, id, time, onDeleleted, onToggleDone, done } = this.props;
    //
    // let className = "";
    // if (done) {
    //     className += " completed";
    // }

    return (
      <Col span={12}  className='card'>
        <img className="card__poster" src="https://image.tmdb.org/t/p/w185/6LlqyjAik3Kh68QQ9AchSJEF0Z5.jpg"
             alt="Poster"/>
        <div className="card__content">
          <div className="genre-circle">
            <div>8.6</div>
          </div>
          <h1>The way back</h1>
          <div className="date">October 1, 2019</div>
          <div className='genre'>
            <button>War</button>
          </div>
          <p>
            A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ...
          </p>
          <Rate className="stars" count="10"/>
        </div>
      </Col>
    )
  }
}