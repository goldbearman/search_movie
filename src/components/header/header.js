import React, {Component} from "react";
import {Tabs, Pagination} from 'antd';


import 'antd/dist/antd.css';
import './header.css'
import SearchForm from "../search-form/search-form";
import Movie from "../movie/movie";
import MovieList from "../movie-list/movie-list";

const {TabPane} = Tabs;

export default class Header extends Component {

  state = {
    page: 1
  };

  onChange = (page, pageSize) => {
    this.setState({
      page: page
    })
  }

  addItem = (item)=>{
    this.props.addItem(item);
  }


  render() {

    const {arrMovies, loading, error, addItem, guestSessionId} = this.props;
    // console.log(arrMovies)
    console.log(guestSessionId)

    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Search" key="1">
          <SearchForm onItemAdded={this.addItem} />
          <MovieList arrMovies={arrMovies} loading={loading} error={error} page={this.state.page} guestSessionId={guestSessionId}/>
          <Pagination defaultCurrent={1} total={20} pageSize={6} size={6} defaultPageSize={6} onChange={this.onChange}/>
          {/*Content of Tab Pane 1*/}
        </TabPane>
        <TabPane tab="Rated" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    )
  }
};
