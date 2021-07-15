import React, {Component} from "react";
// import { formatDistanceToNow } from "date-fns";
import {Rate} from 'antd';
import SwapiService from "../../services/swapi-service";


import 'antd/dist/antd.css';
import "./movie.css"

import {Row, Col, Slider} from 'antd';


export default class Movie extends Component {

    constructor(props) {
        super(props);
        // this.updateMovie();
    }

    swapiService = new SwapiService();

    state = {
        movie: {},
    };

    // updateMovie() {
    //     this.swapiService.getSearchMovie().then((item) => {
    //         // console.log(item);
    //         this.setState({
    //             movie: item
    //         });
    //     })
    // }

    onChangeStars = (stars) => {
        console.log(stars);
        console.log(this.props.guestSessionId);
        this.swapiService.postRate(stars, this.props.movie.id, this.props.guestSessionId).then(result => console.log(result))
    }


    render() {

        const {movie: {vote_average, original_title, overview, poster_path, release_date}} = this.props
        console.log(this.props.movie.id)

        let setColor = 'green';
        if (vote_average<=3) setColor = "red"
        if (vote_average<=5&&vote_average>3) setColor = "orange"
        if (vote_average<=7&&vote_average>5) setColor = "yellow"


            return (
                <Col span={12}>
                    <div className='card'>
                        <img className="card__poster" src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                             alt="Poster"/>
                        <div className="card__content">
                            <div className="rating red">
                                <div className={setColor}>{vote_average}</div>
                            </div>
                            <h1>{original_title}</h1>
                            <div className="date">{release_date}</div>
                            <div className='genre'>
                                <button>War</button>
                            </div>
                            <p>
                                {overview}
                            </p>
                            <Rate className="stars" count="10" onChange={this.onChangeStars}/>
                        </div>
                    </div>
                </Col>
            )
    }
}