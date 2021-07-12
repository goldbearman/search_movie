import React, {Component} from "react";
import PropTypes from "prop-types";

import 'antd/dist/antd.css';
import {Row, Col, Slider, Space, Spin} from 'antd';

import "./movie-list.css";
import Movie from "../movie/movie";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class MovieList extends Component {

  createList = (arrMovies, page) => {
    // console.log(arrMovies)
    // let count = 0;
    const elements = arrMovies.map((movie) => {
      // count++;
      // if (count > 6) {
      //   return false;
      // }
      return (
        <Movie key={movie.id}
               movie={movie}
        />
      );
    });

    return elements.slice((page - 1) * 6 , page * 6 );
  };

  render() {

    const {arrMovies, loading, error, page} = this.props;
    // console.log(arrMovies)
    // console.log(loading)

    const hasData = !(loading || error);

    const onErrorMessage = error ? <ErrorIndicator/> : null;
    const onSpinner = loading ? <MovieSpinner/> : null;
    const content = hasData ?
      <Row gutter={[38, 38]} wrap={true} className="movie-list">{this.createList(arrMovies, page)}</Row> : null

    return (
      <React.Fragment>
        {onSpinner}
        {onErrorMessage}
        {content}
      </React.Fragment>

    );
  }
};

const MovieSpinner = () => {
  return (<Space className="movie-spinner" size="middle">
    <Spin size="large"/>
  </Space>)
};





