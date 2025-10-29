import api from '../api/api';

export const discoverLoader = async () => {
  try {
    // Fetch 3 random meals
    const randomRequests = [1, 2, 3].map(() => api.get('/random.php'));
    const randomResponses = await Promise.all(randomRequests);
    const featuredMeals = randomResponses.map(r => r.data.meals[0]);

    // Fetch categories and ingredients
    const [categoriesResponse, ingredientsResponse] = await Promise.all([
      api.get('/categories.php'),
      api.get('/list.php?i=list'),
    ]);

    return {
      featuredMeals,
      categories: categoriesResponse.data.categories,
      ingredients: ingredientsResponse.data.meals,
    };
  } catch (error) {
    console.error('Discover loader error:', error);
    throw new Response('Failed to load Discover data', { status: 500 });
  }
};
