import React, { Component } from "react";

import "./app.css";
import { DatePicker } from 'antd';
import Header from "../header/header";
import SearchForm from "../search-form/search-form";

export default class App extends Component {
    maxId = 100;

    render() {

        return (
            <section className="container">
                <header className="header">
                    <Header />

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