import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setTimeout(() => {
      navigate('/login');
    }, 750);
  };

  return (
    <nav className='flex items-center justify-between py-4 px-32'>
      <Logo />
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
