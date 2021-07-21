import React, {Component} from "react";
// import { formatDistanceToNow } from "date-fns";
import {Rate} from 'antd';
import SwapiService from "../../services/swapi-service";
import {format} from 'date-fns'
import {SwapiServiceConsumer} from '../swapi-service-context/swapi-service-context'
import Genres from "./genres";


import 'antd/dist/antd.css';
import "./movie.css"

import {Row, Col, Slider} from 'antd';

export default class Movie extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.getGenres();
    }

    state = {
        movie: {},
        rateDefault: 0,
        allGenres: []
    };

    getGenres = () => {
        this.props.getAllGenres().then(arrgenres => {
            console.log(arrgenres.genres);
            this.setState({
                allGenres: arrgenres.genres
            });
        });
    }

    trimText(text) {
        const node = this.myRef.current;
        console.log(node)
        if (text.length > 15) {
            let new_str = text.slice(0, 130) + '...'
            return new_str
        }
        return text;
    }

    onColorRate(rate) {
        let setColor = "rating";
        if (rate > 10 && rate < 0) setColor += " brown";
        if (rate <= 3 && rate >= 0) setColor += " red";
        if (rate <= 5 && rate > 3) setColor += " orange";
        if (rate <= 7 && rate > 5) setColor += " yellow";
        if (rate <= 10 && rate > 7) setColor += " green";
        return setColor;
    }

    onChangeStars = (stars) => {

        console.log(stars);
        console.log(this.props.guestSessionId);
        this.setState({
            rateDefault: stars
        });
        this.swapiService.postRate(stars, this.props.movie.id, this.props.guestSessionId).then(result => console.log(result))
    }

    render() {

        const {movie: {vote_average, original_title, overview, poster_path, release_date,genre_ids}} = this.props
        const {rateDefault} = this.state
        // console.log(new Date(release_date))
        let date = format(new Date(release_date), 'MMMM dd, yyyy');


        return (

            <Col span={12}>
                <div className='card'>
                    <img className="card__poster" src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                         alt="Poster"/>
                    <div className="card__content" ref={this.myRef}>
                        <div className={this.onColorRate(vote_average,)}>
                            <div>{vote_average}</div>
                        </div>
                        <h1>{original_title}</h1>
                        <div className="date">{date}</div>
                        <div className='genre'>
                            <button>War</button>
                            {/*<button>{getAllGenres}</button>*/}
                        </div>
                        <Genres allGenres={this.state.allGenres} movieGenres={genre_ids}/>
                        <p className="clamp">
                            {this.trimText(overview)}
                        </p>
                        <Rate className="stars" count="10" defaultValue={rateDefault}
                              onChange={this.onChangeStars}/>
                    </div>
                </div>
            </Col>)


    }
}

