import { useLoaderData, Link } from 'react-router-dom';
import { useState } from 'react';

const MealDetails = () => {
  const { meal } = useLoaderData();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    meal?.strMealThumb ?? '/login-image.jpg'
  );

  const handleError = () => {
    setImgSrc('/login-image.jpg');
  };

  // Guard for missing meal
  if (!meal) {
    return (
      <div className='text-center mt-10 text-gray-600 dark:text-gray-300'>
        Meal not found.
      </div>
    );
  }

  // Extract and pair ingredients with measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        name: ingredient,
        measure: measure && measure.trim() !== '' ? measure : '—',
      });
    }
  }

  return (
    <div className='space-y-8'>
      {/* Back link */}
      <div className='mt-2'>
        <Link
          to={-1}
          className='inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200'
        >
          ← Back
        </Link>
      </div>

      {/* Header */}
      <header className='flex flex-col xl:flex-row gap-8 bg-white dark:bg-gray-800 shadow rounded-2xl overflow-hidden p-4 md:p-6 transition'>
        {/* Image */}
        <div className='flex-shrink-0 w-full xl:w-2/5 relative'>
          {!imgLoaded && (
            <div className='absolute inset-0 flex items-center justify-center bg-sky-100 dark:bg-gray-700'>
              <div className='w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin' />
            </div>
          )}
          <img
            src={imgSrc}
            alt={meal.strMeal}
            onLoad={() => setImgLoaded(true)}
            onError={handleError}
            className={`w-full h-72 md:h-[450px] lg:h-80 object-cover rounded-xl transition-opacity duration-300 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Basic Info */}
        <div className='flex flex-col justify-between flex-1 space-y-4'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
              {meal.strMeal}
            </h1>
            <p className='text-gray-500 italic'>
              Category: <span className='font-medium'>{meal.strCategory}</span>
            </p>
            <p className='text-gray-500 italic'>
              Area: <span className='font-medium'>{meal.strArea}</span>
            </p>
            <p className='text-gray-500 italic'>
              Tags:{' '}
              <span className='font-medium'>
                {meal.strTags ? meal.strTags.replaceAll(',', ', ') : 'N/A'}
              </span>
            </p>
          </div>

          {/* External Links */}
          <div className='space-y-2'>
            <p className='text-gray-600 dark:text-gray-300'>
              YouTube:{' '}
              {meal.strYoutube ? (
                <a
                  href={meal.strYoutube}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 dark:text-blue-400 hover:underline'
                >
                  Watch Tutorial
                </a>
              ) : (
                'N/A'
              )}
            </p>

            <p className='text-gray-600 dark:text-gray-300'>
              Source:{' '}
              {meal.strSource ? (
                <a
                  href={meal.strSource}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 dark:text-blue-400 hover:underline'
                >
                  View Original Recipe
                </a>
              ) : (
                'N/A'
              )}
            </p>
          </div>
        </div>
      </header>

      {/* Ingredients */}
      <section>
        <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
          Ingredients
        </h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          {ingredients.map((item, index) => (
            <li
              key={index}
              className='flex justify-between bg-sky-50 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200 capitalize transition'
            >
              <span className='line-clamp-1'>{item.name}</span>
              <span className='ml-6 text-gray-500 dark:text-gray-400 font-medium line-clamp-1'>
                {item.measure}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section>
        <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
          Instructions
        </h2>

        {meal.strInstructions ? (
          <ol className='list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300'>
            {meal.strInstructions
              .split('\n')
              .filter(line => line.trim() !== '')
              .map((line, index) => (
                <li key={index} className='leading-relaxed'>
                  {line}
                </li>
              ))}
          </ol>
        ) : (
          <p className='text-gray-500 italic'>No instructions available.</p>
        )}
      </section>
    </div>
  );
};

export default MealDetails;
