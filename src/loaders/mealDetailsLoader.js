import api from '../api/api';

export const mealDetailsLoader = async ({ params }) => {
  try {
    const { id } = params;
    const res = await api.get(`/lookup.php?i=${id}`);
    const meal = res.data.meals?.[0];

    if (!meal || !meal.strMeal) {
      return { meal: null };
    }

    return { meal };
  } catch (error) {
    console.error('Meal details loader error:', error);
    throw new Response('Failed to load meal details', { status: 500 });
  }
};
