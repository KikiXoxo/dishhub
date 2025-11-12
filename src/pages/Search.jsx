import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import GridContainer from '../components/GridContainer';
import Card from '../components/Card';

const Search = () => {
  const { meals, query } = useLoaderData();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(query);

  // Debounce search for mobile input
  useEffect(() => {
    const query = searchTerm.trim();

    const timeout = setTimeout(() => {
      if (!query) {
        // if on /search and there's a ?q param in the URL, remove it
        if (
          window.location.pathname === '/search' &&
          new URLSearchParams(window.location.search).has('q')
        ) {
          navigate('/search', { replace: true });
        }
        return;
      }

      navigate(`/search?q=${encodeURIComponent(query)}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm, navigate]);

  return (
    <div className='space-y-8'>
      {/* Mobile search bar */}
      <div className='block md:hidden'>
        <div className='relative w-full'>
          <PiMagnifyingGlassDuotone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5' />
          <input
            type='text'
            placeholder='Search meals...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-300 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition'
          />
        </div>
      </div>

      {/* Results Section */}
      <section>
        <div className='flex flex-col mb-6'>
          {!query ? (
            <h2 className='text-2xl font-bold'>Search for any meal</h2>
          ) : (
            <>
              <h2 className='text-2xl font-bold'>Search Results</h2>
              <p className='text-gray-500 italic'>
                Showing results for: “{query}”
              </p>
            </>
          )}
        </div>

        {!meals || meals.length === 0 ? (
          query && (
            <p className='text-gray-600 dark:text-gray-400 italic'>
              No meals found.
            </p>
          )
        ) : (
          <GridContainer>
            {meals.map(meal => (
              <Card
                key={meal.idMeal}
                image={meal.strMealThumb}
                title={meal.strMeal}
                description={meal.strInstructions}
                to={`/meals/${meal.idMeal}`}
              />
            ))}
          </GridContainer>
        )}
      </section>
    </div>
  );
};

export default Search;
