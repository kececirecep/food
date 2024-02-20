import './style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import ContentHome from './components/ContentHome/ContentHome';
import Login from './pages/Login/login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useContext } from 'react';

import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  console.log(currentUser);
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
        </Routes>
      </BrowserRouter>


    </>


  );
}

export default App;
