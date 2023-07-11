import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function PayModal() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton> {/*Model component from bootstrap */}
          <Modal.Title>Payment reciept</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You can get your items at home</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
         <Link to=""> <Button variant="primary">Save changes</Button></Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default PayModal;