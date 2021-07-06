import React, { Component } from "react";

import "./app.css";

export default class App extends Component {
    maxId = 100;

    render() {

        return (
            <section className="todoapp">
                <header className="header">
                    <AppHeader />
                    <NewTaskForm onItemAdded={this.addItem} />
                </header>
                <section className="main">
                    <TaskList
                        todos={this.showItems(this.state.todoData)}
                        onDeleted={this.deleteItem}
                        onToggleDone={this.onToggleDone}
                    />
                    <Footer
                        toDo={toDo}
                        filterActiveFooter={this.filterActive}
                        filter={this.state.filter}
                        clearCompleted={this.clearCompleted}
                    />
                </section>
            </section>
        );
    }
}