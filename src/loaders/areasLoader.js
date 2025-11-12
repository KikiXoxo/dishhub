import api from '../api/api';

export const areasLoader = async () => {
  try {
    const response = await api.get('/list.php?a=list');
    const areas = response.data.meals;

    return { areas };
  } catch (error) {
    console.error('Areas loader error:', error);
    throw new Response('Failed to load Areas data', { status: 500 });
  }
};
