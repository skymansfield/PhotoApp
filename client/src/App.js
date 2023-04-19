import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
   
   <Router>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
