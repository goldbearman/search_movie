import React from 'react';
import {Tabs} from 'antd';


import 'antd/dist/antd.css';
import './header.css'
import SearchForm from "../search-form/search-form";
import Movie from "../movie/movie";

const {TabPane} = Tabs;
const Header = () => {

    return (
        <Tabs defaultActiveKey="1" >
            <TabPane tab="Search" key="1">
                <SearchForm />
                <Movie/>
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Rated" key="2">
                Content of Tab Pane 2
            </TabPane>
        </Tabs>
    )

};
export default Header;