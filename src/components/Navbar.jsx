import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  return (
    <div className='relative '>
      <div className='py-10 bg-slate-800'></div>
      <div className='absolute -translate-y-20 flex justify-around items-center w-full py-4'>

        <Link to="/">
          <img src={Logo} alt='Logo' width={160} height={32} />
        </Link>


        <nav>
          <ul className='flex text-richblack-100 gap-x-8 font-semibold'>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">About</Link>
            </li>

            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>


        {/* Login button -> Signup button -> Logout button -> Dashboard button */}

        <div className='flex items-center gap-x-4'>
          {/* when user login nahi hoga tab ye button show hoga */}
          { !isLoggedIn &&
            <Link to="/login">
              <button className='w-28 py-2 px-4 bg-richblack-800 text-richblack-100 font-semibold rounded-md'>
                Login
              </button>
            </Link>
          }

          {/* when user login nahi hoga tab ye button show hoga */}
          { !isLoggedIn &&
            <Link to="/signup">
              <button className='w-28 py-2 px-4 bg-richblack-800 text-richblack-100 font-semibold rounded-md'>
                Sign Up
              </button>
            </Link>
          }

          {/* when user login hoga tab ye button show hoga */}
          { isLoggedIn &&
            <Link to="/">
              <button
              className='w-28 py-2 px-4 bg-richblack-800 text-richblack-100 font-semibold rounded-md'
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged Out");
              }}>
                Log Out
              </button>
            </Link>
          }

          {/* when user login hoga tab ye button show hoga */}
          { isLoggedIn &&
            <Link to="/dashboard">
              <button className='w-28 py-2 px-4 bg-richblack-800 text-richblack-100 font-semibold rounded-md'>
                Dashboard
              </button>
            </Link>
          }
        </div>

      </div>
    </div>
  )
}

export default Navbar;
