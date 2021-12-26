import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.style.css'
class HomePage extends Component {
 
  render() {
    return <div className="HomePage">
      <div className="Sales"><Link to='/product' className='ShopNow'></Link></div>
      <div className="NewCollection"><Link to='/product' className='ShopNow'></Link></div>
    </div>
  }
}

export default HomePage;
