import { useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';

const DashboardLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  // State for mobile sidebar drawer
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () =>
    isSidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);

  return (
    <div className='h-full'>
      <Navbar toggleSidebar={toggleSidebar} />

      <div className='flex h-full pt-[66px] md:pt-[70px] w-screen'>
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className='flex-1 p-4 md:p-6 md:pr-8 md:pb-8 md:ml-48 lg:ml-64 text-gray-800 bg-white dark:text-gray-100 dark:bg-gray-900 min-h-full transition relative '>
          {/* Display spinner when main content is still loading */}
          {isLoading && (
            <div className='absolute inset-0 z-50 flex items-start justify-center bg-white dark:bg-gray-900'>
              <Spinner />
            </div>
          )}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
