import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/Notfound/NotFound";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Register from "./Components/Login/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Inventory from "./Components/Inventory/Inventory";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import AddItem from "./Components/AddItem/AddItem";
import MyItem from "./Components/MyItem/MyItem";




function App() {
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/inventory/:id" element={<Inventory/>}></Route>
        <Route path="/manage-inventory" element={<ManageInventory/>}></Route>
        <Route path="/add-item" element={<AddItem/>}></Route>
        <Route path="/my-item" element={<MyItem/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
