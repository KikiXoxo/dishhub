import { useLoaderData, Link } from 'react-router-dom';
import Card from '../components/Card';
import GridContainer from '../components/GridContainer';

const Discover = () => {
  const { featuredMeals, categories, ingredients } = useLoaderData();

  return (
    <div className='space-y-12'>
      {/* Featured Meals */}
      <section>
        <div className='flex flex-col mb-6'>
          <h2 className='text-2xl font-bold'>Featured Meals</h2>
          <p className='text-gray-500 italic'>Discover a taste adventure!</p>
        </div>
        <GridContainer>
          {featuredMeals.map(meal => (
            <Card
              key={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
              description={meal.strInstructions}
              to={`/meals/${meal.idMeal}`}
            />
          ))}
        </GridContainer>
      </section>

      {/* Categories */}
      <section>
        <div className='flex flex-col mb-6'>
          <h2 className='text-2xl font-bold'>Categories</h2>
          <p className='text-gray-500 italic'>
            Explore meal types from around the world
          </p>
        </div>
        <GridContainer>
          {categories.slice(0, 4).map(cat => (
            <Card
              key={cat.idCategory}
              image={cat.strCategoryThumb}
              title={cat.strCategory}
              description={cat.strCategoryDescription}
              to={`/categories/${cat.strCategory}`}
            />
          ))}
        </GridContainer>
        <div className='flex justify-end mt-4'>
          <Link
            to='/categories'
            className='text-blue-600 dark:text-blue-400 font-medium hover:underline'
          >
            View All Categories →
          </Link>
        </div>
      </section>

      {/* Ingredients */}
      <section>
        <div className='flex flex-col mb-6'>
          <h2 className='text-2xl font-bold'>Ingredients</h2>
          <p className='text-gray-500 italic'>
            Discover the building blocks of flavor
          </p>
        </div>
        <GridContainer>
          {ingredients.slice(1, 4).map(ing => (
            <Card
              key={ing.idIngredient}
              image={ing.strThumb}
              title={ing.strIngredient}
              description={ing.strDescription}
              to={`/ingredients/${encodeURIComponent(ing.strIngredient)}`}
            />
          ))}
        </GridContainer>
        <div className='flex justify-end mt-4'>
          <Link
            to='/ingredients'
            className='text-blue-600 dark:text-blue-400 font-medium hover:underline'
          >
            View All Ingredients →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Discover;
