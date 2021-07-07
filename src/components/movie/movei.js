import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";

import "./task.css";
import PropTypes from "prop-types";

export default class Movei extends Component {

    // static defaultProps = {
    //     label: "The task name",
    //     done: false,
    // };
    //
    // static propTypes = {
    //     label: PropTypes.string,
    //     id: PropTypes.number,
    //     onDeleleted: PropTypes.func,
    //     done: PropTypes.bool,
    //     onToggleDone: PropTypes.func,
    // };

    render() {
        // eslint-disable-next-line react/prop-types
        // const { label, id, time, onDeleleted, onToggleDone, done } = this.props;
        //
        // let className = "";
        // if (done) {
        //     className += " completed";
        // }

        return (
            <li key={id} className={movie-item}>
                <img className="card__poster" src="https://image.tmdb.org/t/p/w185/6LlqyjAik3Kh68QQ9AchSJEF0Z5.jpg"
                     alt="Poster"/>
                <div className="view">
                    <h1>Jarhead: Law of Return</h1>
                    <p>October 1, 2019</p>
                    <div className='genre'>
                        <div>War</div>
                    </div>
                    <p>
                        Major Ronan Jackson (Devon Sawa), an accomplished fighter pilot for the Israel Defense Forces and son of a U.S. Senator (Robert Patrick), is shot down while flying through Syrian airspace. …
                    </p>
                </div>
            </li>
       )
    }
}