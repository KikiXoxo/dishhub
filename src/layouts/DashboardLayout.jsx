import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <div className='flex h-full pt-[64px]'>
        <Sidebar />
        <div className='flex-1 p-6 min-w-0 ml-64 bg-white dark:text-gray-100 dark:bg-gray-900 min-h-full transition'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
