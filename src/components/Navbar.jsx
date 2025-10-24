import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { PiHeartDuotone, PiMoonDuotone, PiSunDuotone } from 'react-icons/pi';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setTimeout(() => {
      navigate('/login');
    }, 750);
  };

  return (
    <nav className='flex items-center justify-between bg-blue-50 py-4 px-6 md:px-16 lg:px-32'>
      <Link to='/'>
        <Logo />
      </Link>

      <div className='flex items-center gap-8'>
        <div className='flex gap-1'>
          <button>
            <PiHeartDuotone className='w-7 h-7 hover:text-gray-950 transition' />
          </button>
          <button>
            <PiMoonDuotone className='dark:hidden w-7 h-7 hover:text-gray-950 transition' />
          </button>
          <button>
            <PiSunDuotone className='hidden dark:block w-7 h-7 hover:text-gray-950 transition' />
          </button>
        </div>

        <button
          onClick={handleLogout}
          className='px-8 py-2 text-sm bg-indigo-950 hover:opacity-90 text-white rounded-full'
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
