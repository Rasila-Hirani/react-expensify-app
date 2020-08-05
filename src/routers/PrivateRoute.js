import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

export const PrivareRoute =(props) =>(
    props.isAuthenticated ? <div>
      <Header/>
      <Route {...props} />
    </div>:<Redirect to="/" />
    
);

const mapStateToProps = (state) =>({
    
  isAuthenticated : !!state.auth.uid
 
 
});

export default connect(mapStateToProps)(PrivareRoute);