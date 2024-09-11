import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { db } from '../firebase';
export const Checkout=()=>{
    const handleOnSubmit=()=>{
        
    }
    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese sus datos y los datos del envío</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={}>

                </form>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
    );
    }


