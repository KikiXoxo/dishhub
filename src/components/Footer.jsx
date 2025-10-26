import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Logo from './Logo';
import { MdMarkEmailUnread } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='p-8 md:px-16 lg:px-20 py-3 flex flex-col gap-4 justify-center md:flex-row items-center justify-between bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 md:h-20 transition'>
      <div className='hidden md:block'>
        <Logo />
        <p className=' text-xs font-semibold'>
          &copy; 2025 | All Rights Reserved
        </p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='font-semibold text-base text-center md:text-start'>
          Follow us
        </p>
        <div className='flex gap-2'>
          <a
            href='https://linkedin.com/in/shekinah-adeogo'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center w-8 h-8 bg-indigo-950 dark:bg-gray-100 hover:opacity-90 rounded-full transition'
          >
            <FaLinkedinIn className='text-white dark:text-gray-800 text-lg hover:scale-[1.15] transition' />
          </a>
          <a
            href='https://github.com/KikiXoxo'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center w-8 h-8 bg-indigo-950 dark:bg-gray-100 hover:opacity-90 rounded-full transition'
          >
            <FaGithub className='text-white dark:text-gray-800 text-lg hover:scale-[1.15] transition' />
          </a>
          <a
            href='mailto:shekinahadeogo@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center w-8 h-8 bg-indigo-950 dark:bg-gray-100 hover:opacity-90 rounded-full transition'
          >
            <MdMarkEmailUnread className='text-white dark:text-gray-800 text-lg hover:scale-[1.15] transition' />
          </a>
          <a
            href='#'
            className='inline-flex items-center justify-center w-8 h-8 bg-indigo-950 dark:bg-gray-100 hover:opacity-90 rounded-full transition'
          >
            <RiInstagramFill className='text-white dark:text-gray-800 text-lg hover:scale-[1.15] transition' />
          </a>
        </div>
      </div>

      <p className='text-[11px] font-medium uppercase md:self-end'>
        Terms & Conditions | Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
