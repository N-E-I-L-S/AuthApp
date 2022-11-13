import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginPage from './components/LoginPage';
import DashPage from './components/DashPage';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dash' element={<ProtectedRoute page={<DashPage/>}/>}/>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
