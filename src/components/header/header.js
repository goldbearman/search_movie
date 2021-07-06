import React from 'react';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './header.css'

const Header = () => {

  return (
    <div className='tabs-container'>
      <Button type="primary" ghost>Search</Button>
      <Button >Rated</Button>
    </div>
  )

};
export default Header;