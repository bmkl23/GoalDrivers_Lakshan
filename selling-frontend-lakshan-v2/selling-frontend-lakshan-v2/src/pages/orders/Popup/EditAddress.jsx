import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Editaddress.css'


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


function EditAdd() {
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [landmarks, setLandmarks] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const seller = {
    email:"kbasnayake2000@gmail.com"
  }
  const handleSubmit = () => {
    axios.post("http://localhost:3002/api/payment/add_delivery",{
      firstname:firstname,
      lastname:lastname,
      district:district,
      contact:contact,
      province:province,
      landmarks:landmarks,
      address:address,
      email:seller.email
    }).then((res)=>{
      console.log(res.data)
      alert(res.data)
      localStorage.setItem("edit",res.data.id)
      handleClose()
      window.location.reload()
    }).catch((err)=>{
      alert(err)
    })
  }

  return (
    <>
      <button className='hun' variant="primary" onClick={handleShow}>
        Edit Details
      </button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header className='hopp' closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form className='form-edit-details' style={{width:'26rem'}}>
            <Row>
                <Form.Control placeholder="First name" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
            </Row><br/>
            <Row>
                <Form.Control placeholder="Last name" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
            </Row><br/>
            <Row>
                <Form.Control placeholder="Mobile Number" value={contact} onChange={(e)=>setContact(e.target.value)}/>
            </Row><br/>
            <Row>
              <Form.Control placeholder="E-mail Address"/>
            </Row><br/>


            <Row>
                <Form.Select aria-label="District"  onChange={(e)=>setDistrict(e.target.value)}>
                <option>Select The District</option>
                <option value="Anuradapura">Anuradapura</option>
                <option value="Ampara">Ampara</option>
                <option value="polonnaruwa">polonnaruwa</option>
                <option value="colombo">colombo</option>
                <option value="Kaluthara">Kaluthara</option>
                <option value="Kegalle">Kegalle</option>
                <option value="Kandy">Kandy</option>
                <option value="Galle">Galle</option>
                <option value="Kaluthara">Kaluthara</option>
                <option value="Mannar">Mannar</option>
                <option value="Matale">Matale</option>
                <option value="Mulathiw">Mulathiw</option>
                <option value="Monaragala">Monaragala</option>
                <option value="Trincomalee">Trincomalee</option>
                <option value="Nuwara Eliya">Nuwara Eliya</option>
                <option value="Wawunia">Wawunia</option>
                <option value="Badulla">Badulla</option>
                <option value="Hambanthota">Hambanthota</option>
                <option value="Battichallo">Battichallo</option>
              </Form.Select>
              </Row><br/>


              
              <Row>  
                <Form.Select aria-label="Province" onChange={(e)=>setProvince(e.target.value)}>
                  <option>Select Province</option>
                  <option value="North Centrel province">North Centrel province</option>
                  <option value="Eastern province">Eastern province</option>
                  <option value="Western province">Western province</option>
                  <option value="Southern province">Southern province</option>
                  <option value="Uwa province">Uwa province</option>
                  <option value="Northern province">Northern province</option>
                  <option value="Central province">Central province</option>
                  <option value="Sabaragamuwa province">Sabaragamuwa province</option> 
                  <option value="North Western Province">North Western Province</option>

                </Form.Select>
            </Row><br/>
            <Row>
              <Form.Control
                        type="Address"
                        placeholder="Address"
                        autoFocus
                        value={address} onChange={(e)=>setAddress(e.target.value)}
                      />
              </Row><br/><br/>
              <Row>
                    <Form.Label>Land Marks</Form.Label>
                    <Form.Control placeholder='Enter any Spesific Land mark' as="textarea" rows={3} value={landmarks} onChange={(e)=>setLandmarks(e.target.value)}/>
              </Row><br/>
        </Form>
        <br></br>

        </Modal.Body>
        
        <Modal.Footer>
          <button className='btk' variant="secondary" onClick={handleSubmit}>
            Confirm
          </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditAdd ;