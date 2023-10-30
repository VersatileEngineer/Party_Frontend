import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// components
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

import './App.css'
import { Footer } from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './pages/Profile/Profile';
import Create from './pages/Create/Create';
import List from './pages/List/List';
import Details from './pages/Details/Details';
import Edit from './pages/Edit/Edit';

function App() {
  const { user, authIsReady } = useAuthContext();
  // const navigate = useNavigate();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>

          <Navbar />
          <main id="main-content">
            {/* {user && <Sidebar />} */}
            <Routes>
              <>
                <Route path="/" element={<Home />} >

                </Route>
                <Route path="/profile" element={<Profile />} >
                
                </Route>
                <Route path="/create" element={<Create />} >
                
                </Route>
                <Route path="/list" element={<List />} >
                
                </Route>
                <Route path="/list/:id" element={<Details />} >
                
                </Route>
                <Route path="/list/:id/edit" element={<Edit />} >
                
                </Route>
              </>


              <Route path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}>
                {/* {!user && <Signup />}
           {user && <Navigate to="/"/>} */}
              </Route>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}>
                {/* {!user && <Login />}
           {user && <Navigate to="/"/>} */}

              </Route>
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
