import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='container mx-auto p-4'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
