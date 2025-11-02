import api from '../api/api';

export const ingredientsLoader = async () => {
  try {
    const response = await api.get('/list.php?i=list');
    return { ingredients: response.data.meals };
  } catch (error) {
    console.error('Ingredients loader error:', error);
    throw new Response('Failed to load Ingredients data', { status: 500 });
  }
};
