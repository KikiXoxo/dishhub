import { NavLink } from 'react-router-dom';
import sidebarLinks from '../data/sidebarLinks';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Larger Screen */}
      <aside className='hidden md:block fixed top-[70px] left-0 bottom-0 w-48 lg:w-64 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 p-4 overflow-y-auto transition z-2'>
        <nav className='space-y-2'>
          {sidebarLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive
                    ? 'bg-indigo-900 text-white dark:bg-indigo-200 dark:text-gray-800'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <Icon className='w-5 h-5' />
              <span className='text-sm font-medium'>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Screen */}
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Sidebar */}
      <aside
        className={`md:hidden fixed top-[66px] left-0 h-[calc(100vh-66px)] w-64 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 p-4 overflow-y-auto transition-transform transform z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <nav className='space-y-2'>
          {sidebarLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() =>
                onClose && onClose()
              } /* close on mobile link click */
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive
                    ? 'bg-indigo-900 text-white dark:bg-indigo-200 dark:text-gray-800'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              <Icon className='w-5 h-5' />
              <span className='text-sm font-medium'>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
