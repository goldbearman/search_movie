import React, {Component} from "react";
import PropTypes from "prop-types";

import 'antd/dist/antd.css';
import {Row, Col, Slider, Space, Spin} from 'antd';

import "./movie-list.css";
import Movie from "../movie/movie";
import SwapiService from "../../services/swapi-service";

export default class MovieList extends Component {

  // state = {
  //   arrMovies:null,
  //   loading: true
  // }
  //
  // swapiService = new SwapiService();


  render() {


    const {arrMovies, loading} = this.props;
    console.log(arrMovies)
    console.log(loading)

    if (loading) {
      return (<Space className="movie-spinner" size="middle">
        {/*<Spin size="small"/>*/}
        {/*<Spin/>*/}
        <Spin size="large"/>
      </Space>)
    }

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

    return <Row gutter={[38, 38]} wrap={true} className="movie-list">{elements}</Row>;
  }
};


