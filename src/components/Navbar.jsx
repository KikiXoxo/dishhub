import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import {
  PiHeartDuotone,
  PiMoonDuotone,
  PiSunDuotone,
  PiMagnifyingGlassDuotone,
} from 'react-icons/pi';
import { MdLogout } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { useThemeStore } from '../stores/themeStore';

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { toggleTheme } = useThemeStore();

  const [searchTerm, setSearchTerm] = useState('');

  // Debounce for search
  useEffect(() => {
    const query = searchTerm.trim();

    const timeout = setTimeout(() => {
      const url = query ? `/search?q=${encodeURIComponent(query)}` : '/search';
      navigate(url);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setTimeout(() => {
      navigate('/login');
    }, 750);
  };

  return (
    <nav className='fixed top-0 left-0 w-screen z-50 flex items-center justify-between bg-gray-50 py-4 px-4 md:px-12 lg:px-20 dark:bg-gray-950 dark:text-gray-100 transition'>
      <div className='flex items-center gap-3'>
        {/* Hamburger - visible on small screens only */}
        <button
          onClick={toggleSidebar}
          className='md:hidden p-1 rounded-md'
          aria-label='Open sidebar'
        >
          <FiMenu className='w-6 h-6' />
        </button>

        <Link to='/'>
          <Logo />
        </Link>

        {/* Search input (Larger Screens) */}
        <div className='hidden md:flex items-center ml-6 lg:ml-10 relative w-64 lg:w-80 xl:w-96'>
          <PiMagnifyingGlassDuotone className='absolute left-3 text-gray-400 dark:text-gray-500 w-5 h-5' />
          <input
            type='text'
            placeholder='Search meals...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-300 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition'
          />
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <div className='flex gap-2 items-center'>
          {/* Mobile Search Icon */}
          <button
            onClick={() => navigate('/search')}
            className='md:hidden p-1'
            aria-label='Search'
          >
            <PiMagnifyingGlassDuotone className='w-6 h-6 hover:text-gray-950 dark:hover:text-gray-300 transition' />
          </button>

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
