import api from '../api/api';
import { categoriesLoader } from './categoriesLoader';
import { ingredientsLoader } from './ingredientsLoader';

export const discoverLoader = async () => {
  try {
    // Fetch 3 random meals
    const randomRequests = [1, 2, 3].map(() => api.get('/random.php'));
    const randomResponses = await Promise.all(randomRequests);
    const featuredMeals = randomResponses.map(r => r.data.meals[0]);

    // Fetch categories and ingredients using imported loaders
    const [{ categories }, { ingredients }] = await Promise.all([
      categoriesLoader(),
      ingredientsLoader(),
    ]);

    return {
      featuredMeals,
      categories,
      ingredients,
    };
  } catch (error) {
    console.error('Discover loader error:', error);
    throw new Response('Failed to load Discover data', { status: 500 });
  }
};
