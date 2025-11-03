import api from '../api/api';

export const ingredientMealsLoader = async ({ params }) => {
  let { ingredient } = params;

  // Convert spaces to underscores for API compatibility
  const formattedIngredient = ingredient.replace(/\s+/g, '_');

  try {
    const response = await api.get(`/filter.php?i=${formattedIngredient}`);
    return {
      meals: response.data.meals || [],
      ingredient,
    };
  } catch (error) {
    console.error('Ingredient meals loader error:', error);
    throw new Response('Failed to load Ingredient Meals data', { status: 500 });
  }
};
