import { useLoaderData, Link } from 'react-router-dom';
import MealCard from '../components/MealCard';
import GridContainer from '../components/GridContainer';
import { DISPLAY_LIMIT } from '../constants';

const AreaMeals = () => {
  const { meals, area } = useLoaderData();

  if (!meals.length) {
    return (
      <div className='text-center mt-10 text-gray-600 dark:text-gray-300'>
        No meals found for this location.
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='mt-2'>
        <Link
          to='/areas'
          className='inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200'
        >
          ← Back to Locations
        </Link>
      </div>

      <section>
        <div className='flex flex-col mb-8'>
          <h2 className='text-2xl font-bold capitalize'>{area} Meals</h2>
          <p className='text-gray-500 italic'>
            Explore a variety of delicious{' '}
            <span className='capitalize'>{area}</span> dishes
          </p>
        </div>

        <GridContainer>
          {meals.slice(0, DISPLAY_LIMIT).map(meal => (
            <MealCard
              key={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
              to={`/meals/${meal.idMeal}`}
            />
          ))}
        </GridContainer>
      </section>
    </div>
  );
};

export default AreaMeals;
