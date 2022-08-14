import React from 'react'
import {  MDBBtn} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux/es/exports'
import { useNavigate, useParams } from "react-router-dom";
const UserInfo = () => {
    const { users } = useSelector((state) => state.data);
    const { id } = useParams();
    const singleUser = users.find((item) => item.id === Number(id));
    const history = useNavigate();
  return (
    <div style={{marginTop: "100px"}}>
        <div className="row" style={{margin:"auto",padding: "15px", maxWidth:"450px", alignContent: "center"}}>
            <p className="col-md-12 fs-3">User Details</p>
            <hr />
            <p className="col-md-6 fw-bold">ID:</p>
            <p className="col-md-6">{singleUser.id}</p>
            <p className="col-md-6 fw-bold">Name:</p>
            <p className="col-md-6">{singleUser.name}</p>
            <p className="col-md-6 fw-bold">Email:</p>
            <p className="col-md-6">{singleUser.email}</p>
            <p className="col-md-6 fw-bold">Phone:</p>
            <p className="col-md-6">{singleUser.phone}</p>
            <p className="col-md-6 fw-bold">Address:</p>
            <p className="col-md-6">{singleUser.address}</p>
        </div>
        <MDBBtn onClick={() => history("/")} color="danger">
            Go Back
          </MDBBtn>
    </div>
  )
}

export default UserInfo