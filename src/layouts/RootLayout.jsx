import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const RootLayout = () => {
  return (
    <div className='min-h-screen grid grid-rows-[1fr_auto]'>
      <main className='h-full'>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
