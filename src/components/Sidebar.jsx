import { NavLink } from 'react-router-dom';
import sidebarLinks from '../data/sidebarLinks';

const Sidebar = () => {
  return (
    <aside className='fixed top-[64px] md:top-[70px] left-0 bottom-0 w-64 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 p-4 overflow-y-auto transition'>
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
  );
};

export default Sidebar;
