import React, { useState } from 'react';
import './popmOdel.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function PopModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <center>
        <button className='chilan' variant="primary" onClick={handleShow} style={{backgroundColor:'transparent'}}>
        Pay Later
      </button>

        </center>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='closeb' closeButton>
          <Modal.Title>Payment is Succesfully Done</Modal.Title>
        </Modal.Header>
        <Modal.Body className='wool'>You can get your Goods at the location that you mentioned, after making the payment 🎉🎉
        <br></br><br></br><span className='tahnk'>Thank you!!</span></Modal.Body>
        <Modal.Footer>
         <Link to='/'>
          <button className='kutoo' variant="secondary" onClick={handleClose}>
            Done
          </button>
          </Link> 
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopModal;