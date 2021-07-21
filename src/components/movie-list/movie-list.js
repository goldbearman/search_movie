import React, {Component} from "react";
import PropTypes from "prop-types";

import 'antd/dist/antd.css';
import {Row, Col, Slider, Space, Spin} from 'antd';

import "./movie-list.css";
import Movie from "../movie/movie";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";

export default class MovieList extends Component {

  state = {
    idSession: 0
  }


  createList = (arrMovies, page, guestSessionId,getAllGenres) => {

    const elements = arrMovies.map((movie) => {
      return (
        <Movie key={movie.id}
               movie={movie} guestSessionId={guestSessionId} getAllGenres={getAllGenres}
        />
      );
    });

    return elements.slice((page - 1) * 6, page * 6);
  };

  render() {

    const {arrMovies, loading, error, page, guestSessionId} = this.props;
    console.log(guestSessionId)
    console.log(arrMovies)

    const hasData = !(loading || error);

    const onErrorMessage = error ? <ErrorIndicator/> : null;
    const onSpinner = loading ? <MovieSpinner/> : null;
    // const content = hasData ?
    //   <Row gutter={[38, 38]} wrap={true} className="movie-list">{this.createList(arrMovies, page, guestSessionId)}</Row> : null

    return (
            <SwapiServiceConsumer>
              {
                ({getAllGenres})=>{
                  return(
                      <React.Fragment>
                        {onSpinner}
                        {onErrorMessage}
                        {hasData ?
                            <Row gutter={[38, 38]} wrap={true} className="movie-list">{this.createList(arrMovies, page, guestSessionId,getAllGenres)}</Row> : null}
                      </React.Fragment>
                  )
                }
              }
            </SwapiServiceConsumer>
    );
  }
};

const MovieSpinner = () => {
  return (<Space className="movie-spinner" size="middle">
    <Spin size="large"/>
  </Space>)
};





