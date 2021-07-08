import React, {Component} from "react";
import PropTypes from "prop-types";

import 'antd/dist/antd.css';
import {Row, Col, Slider} from 'antd';

import "./movie-list.css";
import Movie from "../movie/movie";
import SwapiService from "../../services/swapi-service";

export default class MovieList extends Component {

  state = {
    arrMovies:null
  }

  swapiService = new SwapiService();

  getMovies() {
    return this.swapiService.getSearchMovies("return")
      .then((arr) => arr);
  }


  render() {

    this.swapiService.getSearchMovies("return")
      .then((arrMovies) => {
          const elements = arrMovies.map((movie) => {
            // const { id } = item;
            // console.log(movie)
            return (
              <Movie
                movie={movie}
                // key={id}
                //  {...item}
                // onDeleleted={() => onDeleted(id)}
                // onToggleDone={() => onToggleDone(id)}
              />
            );
          });
          this.setState({
            arrMovies: elements
          })
        }
      );
    return <Row gutter={[38, 38]} wrap={true} className="movie-list">{this.state.arrMovies}</Row>;
  }
};


