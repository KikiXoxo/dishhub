import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='flex pt-[70px]'>
        <Sidebar />
        <div className='flex-1 p-6 min-w-0 ml-64'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
