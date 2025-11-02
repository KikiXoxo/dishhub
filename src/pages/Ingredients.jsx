import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import GridContainer from '../components/GridContainer';

const Ingredients = () => {
  const { ingredients } = useLoaderData();

  return (
    <div className='space-y-12'>
      <section>
        <div className='flex flex-col mb-6'>
          <h2 className='text-2xl font-bold'>All Ingredients</h2>
          <p className='text-gray-500 italic'>
            Explore a variety of ingredient types, and culinary diversity
          </p>
        </div>

        <GridContainer>
          {ingredients.slice(0, 30).map(ing => (
            <Card
              key={ing.idIngredient}
              image={ing.strThumb}
              title={ing.strIngredient}
              description={ing.strDescription}
              to={`/ingredients/${ing.strIngredient}`}
            />
          ))}
        </GridContainer>
      </section>
    </div>
  );
};

export default Ingredients;
