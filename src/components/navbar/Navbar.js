import { Link } from 'react-router-dom'
import './navbar.css'
import { globalContext } from '../../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const {login,setLogin,setClassNew} = useContext(globalContext);
  const navigate = useNavigate();
  const logoutFunc=()=>{
        setClassNew([]);
        setLogin(false);
        navigate('/')
  }
  return (
    <>
      <div className='teacher_nav'>
        <h2>school name</h2>
        <ul>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/status'>Status</Link></li>
          <li><Link to='/attendance'>Attendance</Link></li>
          <li><Link to='/search'>Search</Link></li>
          { login &&
            <li onClick={()=>logoutFunc()}>Logout</li>
          }
        </ul>
      </div>
    </>
  )
}

export default Navbar