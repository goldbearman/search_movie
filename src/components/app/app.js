import React, {Component} from "react";

import "./app.css";
import {DatePicker} from 'antd';
import Header from "../header/header";
import SearchForm from "../search-form/search-form";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  maxId = 100;

  constructor(props) {
    super(props);
    this.getMovies();
  }

  state = {
    arrMovies: {},
    loading: true
  };

  swapiService = new SwapiService();


  getMovies() {
    this.swapiService.getSearchMovies("return")
      .then((arr) => {
        console.log(arr)
        this.setState({
          arrMovies: arr,
          loading: false
        })
      });
  }

  render() {

    const {arrMovies, loading} = this.state;
    console.log(arrMovies)

    return (
      <section className="container">
        <header className="header">
          <Header arrMovies={arrMovies} loading={loading}/>

        </header>
        <section className="main">
          {/*<TaskList*/}
          {/*    todos={this.showItems(this.state.todoData)}*/}
          {/*    onDeleted={this.deleteItem}*/}
          {/*    onToggleDone={this.onToggleDone}*/}
          {/*/>*/}
        </section>
      </section>
    );
  }
}