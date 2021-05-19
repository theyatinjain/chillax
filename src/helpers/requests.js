const TMDB_KEY = '76592f12cad9234e1be53581c60446d6';
const SPOONAC_KEY = 'c61ec1c1bf5d4a4eb5fa2e4ad0f9642b';

const requests = {
    spKey : `apiKey=${SPOONAC_KEY}`,
    tmdbKey : `api_key=${TMDB_KEY}`,
    fetchTrending : `/trending/all/week?api_key=${TMDB_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDB_KEY}`,
    fetchDiscover : `/discover/movie?api_key=${TMDB_KEY}`,
    fetchCustomDrink : `/filter.php?c=Cocktail`,
    fetchCustomRecipe : `/complexSearch?apiKey=${SPOONAC_KEY}&query=pasta`,
};

export default requests;