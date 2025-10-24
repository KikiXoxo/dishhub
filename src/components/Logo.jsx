import { GiHotMeal } from 'react-icons/gi';

const Logo = () => {
  return (
    <h2 className='flex text-2xl md:3xl'>
      <GiHotMeal className='mr-1' /> Dish
      <span className='font-bold'>Hub</span>
    </h2>
  );
};

export default Logo;
