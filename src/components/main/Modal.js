import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className='modal-content'>
                <h4>{props.text}</h4>
                <button onClick={() => { props.setShowModal(false) }}>Great</button>
            </div>
        </div>
    )
}


export default Modal