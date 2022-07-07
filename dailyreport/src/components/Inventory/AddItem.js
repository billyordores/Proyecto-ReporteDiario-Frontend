import React from "react";
// import Modal from "reactstrap/lib/Modal";
import { Modal } from "react-bootstrap"
import { useState } from "react";
const AddItem =()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <button className='btn btn-secondary' onClick={handleShow}>Agregar Item</button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <button className='btn btn-secondary' onClick={handleClose}>
                    Close
                </button>
            <button className='btn btn-secondary' onClick={handleClose}>
                Save Changes
            </button>
            </Modal.Footer>
            </Modal>
        </>
        
    )
}
export default AddItem;