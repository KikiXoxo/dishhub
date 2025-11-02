import api from '../api/api';

export const categoriesLoader = async () => {
  try {
    const response = await api.get('/categories.php');
    return { categories: response.data.categories };
  } catch (error) {
    console.error('Categories loader error:', error);
    throw new Response('Failed to load Categories data', { status: 500 });
  }
};
