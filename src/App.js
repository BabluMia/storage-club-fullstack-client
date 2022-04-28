import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      {/* <h2>Hello From App</h2>
      <button className='btn btn-primary'>Hello</button> */}
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
