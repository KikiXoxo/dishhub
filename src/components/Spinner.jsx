import { BeatLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <BeatLoader color='#5187faff' size={30} />
    </div>
  );
};

export default Spinner;
