import React,{useState, useEffect} from 'react';
import {MDBValidation, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux/es/exports'
import { createUsersStart } from '../Redux/action';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};
const AddEditUer = () => {
  const [formValue, setFormValue] = useState(initialState);
  const {name, email, phone, address} = formValue;
  const history = useNavigate();
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    console.log(formValue);
    e.preventDefault();
    if(name && email && phone && address) {
      dispatch(createUsersStart(formValue));
      setTimeout(() => history('/'),500);
    }
  }
  const onInputChange = (e) => {
    let {name, value} = e.target;
    setFormValue({...formValue, [name]: value}); 
  }
  return (
    <MDBValidation
      className="row g-3"
      style={{marginTop: "100px"}}
      noValidate
      onSubmit={handelSubmit}
      >
        <p className="fs-2 fw-bold">Add User Details</p>
        <div style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center"}}>
          <MDBInput 
          value={name}
          name="name"
          type="text"
          onChange={onInputChange}
          required
          label="Name"
          validation="Please provide a name"
          invalid
          />
          <br />
          <MDBInput 
          value={email}
          name="email"
          type="email"
          onChange={onInputChange}
          required
          label="Email"
          validation="Please provide a email"
          invalid
          />
          <br />
          <MDBInput 
          value={phone}
          name="phone"
          type="number"
          onChange={onInputChange}
          required
          label="Phone"
          validation="Please provide a Phone number"
          invalid
          />
          <br />
          <MDBInput 
          value={address}
          name="address"
          type="text"
          onChange={onInputChange}
          required
          label="Address"
          validation="Please provide an Address"
          invalid
          />
          <br />
          <div className="col-12">
            <MDBBtn style={{marginRight:"10px"}} type="submit">
                Add
            </MDBBtn>
            <MDBBtn onClick={() =>  history('/') } color="danger">
              Go Back
            </MDBBtn>
          </div>
        </div>
    </MDBValidation>
  )
}

export default AddEditUer