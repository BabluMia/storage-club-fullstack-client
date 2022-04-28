import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react';

function App() {
  const [datas,setDatas] =useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data => setDatas(data))
  },[])
  return (
    <div>
      {/* <h2>Hello From App</h2>
      <button className='btn btn-primary'>Hello</button> */}
      {
        datas.map(sdata => <h3>{sdata.model}</h3>)
      }
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
