import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { createUsersStart, updateUsersStart } from "../Redux/action";
import { toast } from "react-toastify";
const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const AddEditUer = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, phone, address } = formValue;
  const [edit, setEdit] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if(!edit){
        dispatch(createUsersStart(formValue));
      toast.success("User Added Successfully");
      setTimeout(() => history("/"), 500);
      }else{
        dispatch(updateUsersStart({id,formValue}));
        setEdit(false); 
        toast.success("User Updated Successfully");
      setTimeout(() => history("/"), 500);
      }
    }
  };
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setEdit(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    }else{
      setEdit(false);
      setFormValue({ ...initialState})
    }
  },[id]);
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handelSubmit}
    >
      <p className="fs-2 fw-bold">{edit ? <>Update User Details</> : <>Add User Details</>}</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={name || ""}
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
          value={email || ""}
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
          value={phone || ""}
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
          value={address || ""}
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
          {
            edit ? <MDBBtn style={{ marginRight: "10px" }}type="submit">Update Data</MDBBtn>:<MDBBtn style={{ marginRight: "10px" }} type="submit">
            Add
          </MDBBtn>
          }
          <MDBBtn onClick={() => history("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUer;
