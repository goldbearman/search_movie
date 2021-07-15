import React, {Component} from "react";
import {Tabs, Pagination} from 'antd';


import 'antd/dist/antd.css';
import './header.css'
import SearchForm from "../search-form/search-form";
import Movie from "../movie/movie";
import MovieList from "../movie-list/movie-list";
import SwapiService from "../../services/swapi-service";

const {TabPane} = Tabs;

export default class Header extends Component {

    state = {
        page: 1,
        rateMovie: []
    };

    /////////////////////////////////////////////

    swapiService = new SwapiService();

    getRateMovies = (activeKey) => {
        console.log(activeKey);
        if (activeKey === '2') {
            console.log("in")
            console.log(this.props.guestSessionId)
            this.swapiService.getRateMovie(this.props.guestSessionId)
                .then((rateMovie) => {
                    console.log(rateMovie.results)
                    this.setState({
                        rateMovie: rateMovie.results
                    })
                }).catch(this.onError);
        }
    }


    ///////////////////////////////////////////////

    onChange = (page, pageSize) => {
        this.setState({
            page: page
        })
    }

    addItem = (item) => {
        this.props.addItem(item);
    }


    render() {

        const {arrMovies, loading, error, addItem, guestSessionId} = this.props;
        // console.log(arrMovies)
        console.log(guestSessionId)

        return (
            <Tabs defaultActiveKey="1" onChange={this.getRateMovies}>
                <TabPane tab="Search" key="1">
                    <SearchForm onItemAdded={this.addItem}/>
                    <MovieList arrMovies={arrMovies} loading={loading} error={error} page={this.state.page}
                               guestSessionId={guestSessionId}/>
                    <div className='pagination-container'>
                        <Pagination defaultCurrent={1} total={arrMovies.length}
                                    defaultPageSize={6}
                                    onChange={this.onChange}/>
                    </div>
                    {/*Content of Tab Pane 1*/}
                </TabPane>
                <TabPane tab="Rated" key="2">
                    <MovieList arrMovies={this.state.rateMovie} loading={loading} error={error} page={this.state.page}
                               guestSessionId={guestSessionId}/>
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        )
    }
};
