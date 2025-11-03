import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import GridContainer from '../components/GridContainer';
import { DISPLAY_LIMIT } from '../constants';

const Categories = () => {
  const { categories } = useLoaderData();

  return (
    <div className='space-y-12'>
      <section>
        <div className='flex flex-col mb-6'>
          <h2 className='text-2xl font-bold'>All Categories</h2>
          <p className='text-gray-500 italic'>
            Discover delicious meal types and explore culinary diversity
          </p>
        </div>

        <GridContainer>
          {categories.slice(0, DISPLAY_LIMIT).map(cat => (
            <Card
              key={cat.idCategory}
              image={cat.strCategoryThumb}
              title={cat.strCategory}
              description={cat.strCategoryDescription}
              to={`/categories/${cat.strCategory.toLowerCase()}`}
            />
          ))}
        </GridContainer>
      </section>
    </div>
  );
};

export default Categories;
