import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props)=>(
    <div>
        <h1>Info</h1>
    <p>The info is :{props.info}</p>
    </div>
);

const RequireAuthentication = (WrappedComponent) =>{
    return (props)=>(
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props} />: <p>You are not authenticate</p>}
        
        </div>
    );
};

const AuthInfo = RequireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is info component"/>,document.getElementById('app'));