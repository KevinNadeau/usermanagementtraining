import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Create from './Create';
import Read from './Read';
import Update from './Update';
// import Update from './Update.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/create:id' element={<Update />}></Route>
        <Route path='/read:id' element={<Read />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
