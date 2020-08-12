import React,{useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app')
const DeleteModal =(props)=>{

    return(
        <div>
        <Modal 
           isOpen={!!props.isOpen}
           onRequestClose={props.isClose}
           contentLabel="Delete Expense"
           className="modal"
        >
          <div>
            <h3 className="modal__title">Remove Expense</h3>
            <p className="modal__body">Are you sure want to remove expense ?</p>
            <button className="button" onClick={props.onRemove}>Remove</button>
            <button onClick={props.isClose} className="button button--secondary">Cancel</button>           
          </div>
          
        </Modal>
        
        </div>
    );
}
export default DeleteModal;