import React from 'react';
import Modal from 'react-modal';
import {startEmailLogin,startEmailSignUp} from '../actions/auth';

export default class LoginModal extends React.Component{
   state={
       mode:'SIGNIN',
       error:''
   }
   onModeChange =(e)=>{
       const mode = e.target.value
       this.setState({mode})
   }
   onEmailSubmit = (e) =>{
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       if(this.state.mode === 'SIGNIN'){
          const result=  startEmailLogin(email,password)         
            .catch((error)=>{      
                let errorCode = error.code;
                let errorMessage = error.message;      
                if(errorCode === 'auth/user-not-found'){
                    this.setState({error :'Email address not register.Create an account or try again'})
                }else if(errorCode === 'auth/wrong-password'){
                    this.setState({error :'Enter the wrong password.Try again.'})
                }else if (errorCode === 'auth/too-many-requests'){ 
                   this.setState({error: 'You have attempted to login too many times. Try again later.'})
                }else if (errorCode === 'auth/invalid-email') {
                    this.setState({error: 'Enter a valid email address.'})
                }else {
                    this.setState({error: errorMessage})
                }                    
            })
            
       }
       else if(this.state.mode === 'CREATE'){
          const result = startEmailSignUp(email,password)
           .catch((e)=>{
               this.setState({error : e.message})
           })
       }
       e.target.email.value="";
            e.target.password.value="";
   }
   
    render(){
        return(
            <Modal
            isOpen={!!this.props.loginpopup}
            onRequestClose={this.props.handleCloseModal}
            contentLabel="Email Sign up"
            closeTimeoutMS={200}
            className='modal'
            appElement={app}
           >
           <div>
           <h3 className='modal__title'>SignIn or SignUp to Expensify</h3>
                {this.state.error !=='' ?<p className="form__error">{this.state.error}</p>:''}
                <div className="content-container">
                    <select className="modal_select" onChange={this.onModeChange}>
                        <option value='SIGNIN'>SignIn</option>
                        <option value='CREATE'>Create an account</option>
                    </select>
                    <form className="form" onSubmit={this.onEmailSubmit}>
                        <input className='modal_input' type='email' id='email' 
                            placeholder='you@example.com' required
                           />
                        <input className='modal_input' type='password' id='password' 
                            placeholder='Password' 
                            minLength='6' 
                            required
                             />
                        <button className='button'>Submit</button>
                       
                    </form>
                </div>
           </div>
           </Modal>
        
        );
        
    }
}