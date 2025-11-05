import api from '../api/api';

export const searchLoader = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('q')?.trim() || '';

    // If query is empty, return undefined meals
    if (!query) {
      return { meals: undefined, query };
    }

    const res = await api.get(`/search.php?s=${encodeURIComponent(query)}`);
    const meals = res.data.meals;

    return { meals: meals ?? null, query };
  } catch (error) {
    console.error('Search loader error:', error);
    throw new Response('Failed to load search results', { status: 500 });
  }
};
