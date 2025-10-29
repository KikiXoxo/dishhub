import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className=' w-screen h-full'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
