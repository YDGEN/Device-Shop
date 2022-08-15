import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {Button} from "react-bootstrap"
import { observer } from 'mobx-react-lite';



const NavBar = observer( () =>  {
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={'/shop'}>BuyDevice</NavLink>
          {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button className="me-2" variant={"outline-light"}>Log in</Button>{' '}
            <Button variant={"outline-light"}>Admin Bar</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Log in</Button>
          </Nav>
          }
          </Container>
      </Navbar>
  )
}
)
export default NavBar;