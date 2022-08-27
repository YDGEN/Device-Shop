import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Dropdown, Form, FormControl, Row } from "react-bootstrap";
import { Context } from "../..";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


const CreateDevice = ({show, onHide}) => {
const {device} = useContext(Context)
const [info, setInfo] = useState([])

const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
}
const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
}

   return(
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add new device
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
          <Dropdown className="mt-2 mb-3">
            <DropdownToggle>Choose type</DropdownToggle>
              <DropdownMenu>
                {device.types.map(type =>
                    <DropdownItem key={type.id}>{type.name}</DropdownItem>
                )}
              </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2 mb-3">
            <DropdownToggle>Choose brand</DropdownToggle>
              <DropdownMenu>
                {device.brands.map(brand =>
                    <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                )}
              </DropdownMenu>
          </Dropdown>
             <Form.Control 
                className="mt-3"
                placeholder="add device name"
            />
             <Form.Control 
                className="mt-3"
                placeholder="add device price"
                type="number"
            />
             <Form.Control 
                className="mt-3"
                type="file"
            />
            <hr/>
            <Button
                variant={'outline-dark'}
                onClick={addInfo}
            >
                Add new property
            </Button>
            {info.map(i => 
                    <Row className="mt-3" key={i.number}>
                       <Col md={4} className="mt-2">
                        <FormControl
                           placeholder="text name characteristic"
                        />
                       </Col>
                       <Col md={4} className="mt-2">
                        <FormControl
                            placeholder="text info characteristic"
                        />
                       </Col>
                       <Col md={4} className="mt-3">
                            <Button 
                            onClick={() => removeInfo(i.number)}
                            variant={'outline-danger'}
                        >
                            Delete
                            </Button>
                       </Col>
                    </Row>
                )}
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={onHide}>Close</Button>
      <Button variant="outline-success" onClick={onHide}>Add</Button>
    </Modal.Footer>
  </Modal>
   )
}

export default CreateDevice