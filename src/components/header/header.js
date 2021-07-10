import React, {Component} from "react";
import {Tabs} from 'antd';


import 'antd/dist/antd.css';
import './header.css'
import SearchForm from "../search-form/search-form";
import Movie from "../movie/movie";
import MovieList from "../movie-list/movie-list";

const {TabPane} = Tabs;

export default class Header extends Component {

  // state = {
  //   arrMovie: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  // };


  render() {

    const {arrMovies, loading, error} = this.props;
    // console.log(arrMovies)
    // console.log(loading)

    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Search" key="1">
          <SearchForm/>
          <MovieList arrMovies={arrMovies} loading={loading} error={error}/>
          {/*Content of Tab Pane 1*/}
        </TabPane>
        <TabPane tab="Rated" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    )
  }
};
