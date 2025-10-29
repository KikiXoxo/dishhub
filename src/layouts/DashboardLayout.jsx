import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';

const DashboardLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='h-full'>
      <Navbar />
      <div className='flex h-full pt-[64px] md:pt-[70px] w-screen'>
        <Sidebar />
        <div className='flex-1 p-6 ml-64 bg-white dark:text-gray-100 dark:bg-gray-900 min-h-full transition relative '>
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
