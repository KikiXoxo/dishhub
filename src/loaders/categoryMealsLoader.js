import api from '../api/api';

export const categoryMealsLoader = async ({ params }) => {
  try {
    const { category } = params;
    const res = await api.get(`/filter.php?c=${category}`);
    return { meals: res.data.meals || [], category };
  } catch (error) {
    console.error('Category meals loader error:', error);
    throw new Response('Failed to load category meals', { status: 500 });
  }
};
