import React, {Component} from "react";
// import { formatDistanceToNow } from "date-fns";
import {Rate} from 'antd';
import SwapiService from "../../services/swapi-service";


import 'antd/dist/antd.css';
import "./movie.css"

import {Row, Col, Slider} from 'antd';


export default class Movie extends Component {

  constructor(props) {
    super(props);
    this.updateMovie();
  }

  swapiService = new SwapiService();

  state = {
    title: null,
    genre: null,
    rating: null,
    text: null
  };

  updateMovie(){
    this.swapiService.getSearchMovie().then((item)=>{
      console.log(item);
      this.setState({
        title: item.original_title,
        genre: item.genre_ids,
        rating: item.vote_average,
        text: item.overview
      });
    })
  }

  render() {


    return (
      <Col span={12}>
        <div className='card'>
          <img className="card__poster" src="https://image.tmdb.org/t/p/w185/6LlqyjAik3Kh68QQ9AchSJEF0Z5.jpg"
               alt="Poster"/>
          <div className="card__content">
            <div className="rating">
              <div>{this.state.rating}</div>
            </div>
            <h1>{this.state.title}</h1>
            <div className="date">October 1, 2019</div>
            <div className='genre'>
              <button>War</button>
            </div>
            <p>
              {this.state.text}
            </p>
            <Rate className="stars" count="10"/>
          </div>
        </div>
      </Col>
    )
  }
}