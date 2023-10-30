import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles & images
import './Navbar.css'
import Temple from '../../assets/party12.png'
import Avatar from '../Avatar/Avatar'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  if (user) {
    // console.log(user.photoURL);

  }

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          {/* <img src={Temple} alt="logo" /> */}
          <span>The Party center</span>
        </li>
        <li><Link to="/">Home</Link></li>

        {/* {user && (<li>Logged in as {user.email}</li>
        )} */}


        {user && (
          <>
          {user.photoURL && (
            <li>
          <Avatar src={user.photoURL} />
        </li>
          )}
        
        <li><Link to="/profile">  Update Profile</Link></li>
        <li><Link to="/create">Create party</Link></li>
        <li><Link to="/list">Party's list</Link></li>
       
        {!isPending && <button className="btn" onClick={logout}>Logout</button>}
        {isPending && <button className="btn" disabled>Logging out...</button>}
        </>
        )
        }

        

      

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

      </ul>
    </nav>
  )
}
