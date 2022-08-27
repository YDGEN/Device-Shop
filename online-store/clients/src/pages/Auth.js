import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';

const Auth = () => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    if(isLogin){
      const response = await login()
    } else {
      const response = await registration(email, password)
      console.log(response)
    }
  }

  return (
   <Container 
   className="d-flex justify-content-center align-items-center"
   style={{height: window.innerHeight - 54}}
   >
  <Card style={{width: 600}} className="p-5">
       <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
       <Form className="d-flex flex-column">
          <FormControl
            className="mt-3"
            placeholder="Enter your email..."
            value={email}
            onChange={e => setEmail(e.target.value)}        
          />
           <FormControl
            className="mt-2"
            placeholder="Enter your password..."
            value={password}
            onChange={e => setPassword(e.target.value)} 
            type="password"         
          />
         <Row className='d-flex mt-2 pl-3 pr-3'>
          {isLogin ?
          <div>
          Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Click here to register</NavLink>
          </div>
            :
            <div>
          Have an account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
            </div>
          }
         <Button 
          variant={"outline-success"}
          className="mt-4"
          onClick={click}
          >
          {isLogin ? 'Log in' : 'Registration'}
          </Button>
         </Row>
      </Form>
 </Card>
   </Container>
  )
}

export default Auth;