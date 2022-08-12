import React,{useState} from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import {NavLink} from 'react-router-dom'

function Header() {
    const [showNavColor, setShowNavColor] = useState(false);
  return <MDBNavbar expand='lg' dark bgColor='primary'>
  <MDBContainer fluid>
    <MDBNavbarBrand className='text-white'>CRUD</MDBNavbarBrand>
    <MDBNavbarToggler
      type='button'
      className='text-white'
      data-target='#navbarColor02'
      aria-controls='navbarColor02'
      aria-expanded='false'
      aria-label='Toggle navigation'
      onClick={() => setShowNavColor(!showNavColor)}
    >
      <MDBIcon icon='bars' fas />
    </MDBNavbarToggler>
    <MDBCollapse show={showNavColor} navbar>
      <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
        <MDBNavbarItem>
          <MDBNavbarLink className='nav-link'>
            <NavLink to="/" className='text-white'>
                Home
            </NavLink>
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
        <MDBNavbarLink className='nav-link'>
            <NavLink to="/addUser" className='text-white'>
                Add User
            </NavLink>
          </MDBNavbarLink>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBContainer>
</MDBNavbar>
;
}

export default Header;
