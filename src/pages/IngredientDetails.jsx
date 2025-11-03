import { useParams, useLoaderData, Link } from 'react-router-dom';
import CardDetails from '../components/CardDetails';

const IngredientDetails = () => {
  const { ingredients } = useLoaderData();
  const { ingredient } = useParams();

  // Find specific ingredient object by name
  const selectedIngredient = ingredients.find(
    ing => ing.strIngredient.toLowerCase() === ingredient.toLowerCase()
  );

  if (!selectedIngredient) {
    return (
      <div className='text-center mt-10 text-gray-600 dark:text-gray-300'>
        Ingredient not found.
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='mt-2'>
        <Link
          to='/ingredients'
          className='inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200'
        >
          ← Back to Ingredients
        </Link>
      </div>

      <section>
        <div className='flex flex-col mb-8'>
          <h2 className='text-2xl font-bold'>
            {selectedIngredient.strIngredient}
          </h2>
          <p className='text-gray-500 italic'>
            Learn more about this ingredient
          </p>
        </div>

        <CardDetails
          image={selectedIngredient.strThumb}
          title={selectedIngredient.strIngredient}
          description={selectedIngredient.strDescription}
          to={`/ingredients/${encodeURIComponent(
            selectedIngredient.strIngredient.toLowerCase()
          )}/meals`}
        />
      </section>
    </div>
  );
};

export default IngredientDetails;
