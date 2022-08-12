import {Route,Routes} from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import AddEditUer from "./Pages/AddEditUer";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/addUser" element={<AddEditUer />}/>
      <Route path="/editUser/:id" element={<AddEditUer />}/>
      </Routes>
    </div>
  );
}

export default App;
