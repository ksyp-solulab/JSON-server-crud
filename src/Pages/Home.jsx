import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { deleteUsersStart, loadUsersStart } from '../Redux/action'
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBTooltip, MDBSpinner } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';



const Home = () => {
  const dispatch = useDispatch();
  const {users,loading,error} = useSelector(state =>state.data)
  const handelDelete = (id) => {
    if(window.confirm("Are you sure you want to delete that user?")){
      dispatch(deleteUsersStart(id));
      toast.success("User Deleted Successfully");
      // setTimeout(() => {window.location.reload();},2000 )
    }
  }
  useEffect(() => {
    dispatch(loadUsersStart())
  },[])
  // useEffect(() => error && toast.error(error),[error])
  if(loading) {
    return(
      <MDBSpinner style={{marginTop: "150px"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    )
  }
  return (
    <div className="container" style={{marginTop:"150px"}}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        {
          users.map((item,index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <MDBBtn className="m-1" tag="a" color="none" onClick={() => handelDelete(item.id)}> 
                    <MDBTooltip title="Delete" tag="a">
                        <MDBIcon fas icon="trash" style={{color: "#dd4b39"}}
                        size="lg"/>
                    </MDBTooltip>
                  </MDBBtn>{"  "}
                  <Link to={`/editUser/${item.id}`}>
                  <MDBTooltip title="Edit" tag="a">
                        <MDBIcon fas icon="pen" style={{color: "#55acee", marginTop: "10px"}}
                        size="lg"/>
                    </MDBTooltip>
                  </Link>{"  "}
                  <Link to={`/userInfo/${item.id}`}>
                  <MDBTooltip title="view" tag="a">
                        <MDBIcon fas icon="eye" style={{color: "#3b5998", marginBottom: "10px"}}
                        size="lg"/>
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))
        }
      </MDBTable>
    </div>
  )
}

export default Home