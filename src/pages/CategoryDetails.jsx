import { useParams, useLoaderData, Link } from 'react-router-dom';
import CardDetails from '../components/CardDetails';

const CategoryDetails = () => {
  const { categories } = useLoaderData();
  const { category } = useParams();

  // Find specific category object by name
  const selectedCategory = categories.find(
    cat => cat.strCategory.toLowerCase() === category.toLowerCase()
  );

  if (!selectedCategory) {
    return (
      <div className='text-center mt-10 text-gray-600 dark:text-gray-300'>
        Category not found.
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='mt-2'>
        <Link
          to='/categories'
          className='inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200'
        >
          ← Back to Categories
        </Link>
      </div>

      <section>
        <div className='flex flex-col mb-8'>
          <h2 className='text-2xl font-bold'>{selectedCategory.strCategory}</h2>
          <p className='text-gray-500 italic'>
            Learn more about this meal category
          </p>
        </div>

        <CardDetails
          image={selectedCategory.strCategoryThumb}
          title={selectedCategory.strCategory}
          description={selectedCategory.strCategoryDescription}
          to={`/categories/${selectedCategory.strCategory}/meals`}
        />
      </section>
    </div>
  );
};

export default CategoryDetails;
