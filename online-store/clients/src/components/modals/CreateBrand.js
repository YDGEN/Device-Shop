import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";


const CreateBrand = ({show, onHide}) => {
   return(
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add new brand
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
          <Form.Control
          placeholder={"Text name of brand"}
          />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={onHide}>Close</Button>
      <Button variant="outline-success" onClick={onHide}>Add</Button>
    </Modal.Footer>
  </Modal>
   )
}

export default CreateBrand