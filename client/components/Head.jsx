import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actions from '../actions/actionTypes.js';
import Login from './Login.jsx'
/* const mapStateToProps = state => (
    {}
  ); */
  const Heading = props => (
    //maybe render issue here
    
    <div id="title">
        <p id="welcome">Welcome To Rest and Relaxation</p>
        <Login/>
    </div>
  );
  
  
  //export default connect(mapStateToProps)(Heading)
  export default Heading