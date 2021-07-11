import React, {Component} from "react";

import "./app.css";
import {DatePicker} from 'antd';
import Header from "../header/header";
import SearchForm from "../search-form/search-form";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  maxId = 100;

  // constructor(props) {
  //   super(props);
  //   this.getMovies();
  // }

  componentDidMount() {
    this.getMovies();
  }

  state = {
    input: 'return',
    arrMovies: [],
    loading: true,
    error: false
  };

  swapiService = new SwapiService();

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  };

  getMovies() {
    this.swapiService.getSearchMovies('return')
      .then((arr) => {
        console.log(arr)
        this.setState({
          arrMovies: arr,
          loading: false
        })
      }).catch(this.onError);
  }

  addItem(input) {
    this.setState({
      input: input,
    })
  }

  render() {
s
    const {arrMovies, loading, error} = this.state;
    // console.log(arrMovies)

    return (
      <section className="container">
        <header className="header">
          <Header arrMovies={arrMovies} loading={loading} error={error} addItem={this.addItem}/>

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