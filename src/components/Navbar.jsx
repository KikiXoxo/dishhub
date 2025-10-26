import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { PiHeartDuotone, PiMoonDuotone, PiSunDuotone } from 'react-icons/pi';
import { MdLogout } from 'react-icons/md';
import { useThemeStore } from '../stores/themeStore';

const Navbar = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useThemeStore();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setTimeout(() => {
      navigate('/login');
    }, 750);
  };

  return (
    <nav className='flex items-center justify-between bg-gray-50 py-4 px-6 md:px-16 lg:px-32 dark:bg-gray-800 dark:text-gray-100 transition'>
      <Link to='/'>
        <Logo />
      </Link>

      <div className='flex items-center gap-8'>
        <div className='flex gap-1'>
          <button>
            <PiHeartDuotone className='w-6 h-6 md:w-7 md:h-7 hover:text-gray-950 dark:hover:text-gray-300 transition' />
          </button>
          <button onClick={toggleTheme} className='dark:hidden'>
            <PiMoonDuotone className='w-6 h-6 md:w-7 md:h-7 hover:text-gray-950 dark:hover:text-gray-300 transition' />
          </button>
          <button onClick={toggleTheme} className='hidden dark:block'>
            <PiSunDuotone className=' w-6 h-6 md:w-7 md:h-7 hover:text-gray-950 dark:hover:text-gray-300 transition' />
          </button>
          <button onClick={handleLogout}>
            <MdLogout className='md:hidden w-6 h-6 md:w-7 md:h-7 hover:text-gray-950 dark:hover:text-gray-300 transition' />
          </button>
        </div>

        <button
          onClick={handleLogout}
          className='hidden md:block px-8 py-2 text-sm bg-indigo-950 hover:opacity-90 text-white rounded-full dark:bg-gray-100 dark:text-gray-800'
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
