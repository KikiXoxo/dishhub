import { useRouteError } from 'react-router-dom';
import { PiRobotDuotone } from 'react-icons/pi';

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex flex-col items-center justify-center h-full text-center py-20 px-4'>
      <PiRobotDuotone className='text-8xl mb-6 text-gray-600 dark:text-gray-300' />
      <h1 className='text-3xl font-bold mb-2'>Something went wrong</h1>
      <p className='text-gray-600 dark:text-gray-400 mb-6'>
        An error occurred while loading this section. Try reloading or check a
        different sidebar link
      </p>
      {error?.status && (
        <p className='font-semibold text-red-500'>Error {error.status}</p>
      )}
    </div>
  );
};

export default ErrorBoundary;
