import {Route,Routes} from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import AddEditUer from "./Pages/AddEditUer";
import Home from "./Pages/Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import UserInfo from "./Pages/UserInfo";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/addUser" element={<AddEditUer />}/>
      <Route path="/editUser/:id" element={<AddEditUer />}/>
      <Route path="/userInfo/:id" element={<UserInfo />}/>
      </Routes>
    </div>
  );
}

export default App;
