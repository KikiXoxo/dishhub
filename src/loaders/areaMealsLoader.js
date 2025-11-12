import api from '../api/api';

export const areaMealsLoader = async ({ params }) => {
  try {
    const area = params.area;
    const response = await api.get(`/filter.php?a=${area}`);
    return { meals: response.data.meals, area };
  } catch (error) {
    console.error('Area meals loader error:', error);
    throw new Response('Failed to load meals for area', { status: 500 });
  }
};
