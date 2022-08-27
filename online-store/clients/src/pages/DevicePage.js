import React from 'react'
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';

const DevicePage = () => { 
  const device = {id: 1, name: "Iphone 12 pro", rating: 5, price: 25000}
  const description = [
       {id:1, title:'RAM',description:'5gb'},
       {id:2, title:'Сamera',description:'12mp'},
       {id:3, title:'CPU',description:'Intel'},
       {id:4, title:'Сore',description:'2'},
       {id:5, title:'Battery',description:'4000'}
  ]
  return (
    <Container className='mt-3'>
    <Row>
      <Col md={4}>
        <Image width={300} height={300}/>
      </Col>
      <Col md={4}>
        <Row className='d-flex flex=column align-items-center'>
          <h2>{device.name}</h2>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{background:  'url(' + require('../assets/BigStar.png'), width:240, height:270, backgroundSize: 'cover', fontSize:64}}
          >
            {device.rating}
          </div>
        </Row>
      </Col>
      <Col md={4}>
        <Card className='d-flex flex column align-items-center justify-content-around'
         style={{width: 300, height:300, fontSize:32, border:'solid light'}}
        >
          <h3>{device.price}$</h3>
          <Button variant='outline-dark'>Add in basket</Button>
        </Card>
      </Col>
      </Row>
      <Row className="d-flex flex column">
        <h1>Feature</h1>
      {description.map((info, index) =>
         <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
          {info.title}: {info.description}
         </Row>
         )}
      </Row>
    </Container>
  )
}

export default DevicePage;
