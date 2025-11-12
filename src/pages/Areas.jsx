// pages/Areas.jsx
import { useLoaderData } from 'react-router-dom';
import GridContainer from '../components/GridContainer';
import Card from '../components/Card';
import { DISPLAY_LIMIT } from '../constants';

const Areas = () => {
  const { areas } = useLoaderData();

  return (
    <div className='space-y-12'>
      <section>
        <div className='flex flex-col mb-6'>
          <h2 className='text-2xl font-bold'>All Areas</h2>
          <p className='text-gray-500 italic'>
            Explore meals by country or region
          </p>
        </div>

        <GridContainer>
          {areas.slice(0, DISPLAY_LIMIT).map(area => (
            <Card
              key={area.strArea}
              image='/login-image.jpg'
              title={area.strArea}
              description={`Discover authentic ${area.strArea} dishes and flavors.`}
              to={`/areas/${area.strArea.toLowerCase()}`}
            />
          ))}
        </GridContainer>
      </section>
    </div>
  );
};

export default Areas;
