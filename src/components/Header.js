import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'

export const Header =({startLogout,userName}) =>(
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
            </Link>
            <span className="header__title">{userName}</span>
            <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
    </div>
    </header>

);
const mapStateToProps = (state) =>({    
    userName : state.auth.userName
  });
  

const mapDispatchToProps =(disptch) =>({
    startLogout :()=>disptch(startLogout())   
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);