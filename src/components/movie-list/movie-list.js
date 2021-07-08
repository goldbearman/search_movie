import React from "react";
import PropTypes from "prop-types";

import 'antd/dist/antd.css';
import { Row, Col, Slider } from 'antd';

import "./movie-list.css";
import Movie from "../movie/movie";

// const MovieList = ({ todos, onDeleted, onToggleDone }) => {
const MovieList = ({ arrMovie }) => {
    console.log(arrMovie);
    const elements = arrMovie.map((item) => {
        // const { id } = item;
        console.log("go1")
        return (
            <Movie
                // key={id}
                //  {...item}
                // onDeleleted={() => onDeleted(id)}
                // onToggleDone={() => onToggleDone(id)}
            />
        );
    });

    return <Row gutter={[38,38]} wrap={true} className="movie-list">{elements}</Row>;
};

// TaskList.defaultProps = {};
//
// TaskList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.object).isRequired,
//     onDeleted: PropTypes.func,
//     onToggleDone: PropTypes.func,
// };

export default MovieList;