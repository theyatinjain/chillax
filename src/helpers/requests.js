const TMDB_KEY = '76592f12cad9234e1be53581c60446d6';

const requests = {
    tmdbKey : `api_key=${TMDB_KEY}`,
    fetchTrending : `/trending/all/week?api_key=${TMDB_KEY}&language=en-US`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${TMDB_KEY}`,
    fetchTopRatedSeries: `/tv/top_rated?api_key=${TMDB_KEY}`,
    fetchDiscover : `/discover/movie?api_key=${TMDB_KEY}`,
    fetchCustomDrink : `/filter.php?c=Cocktail`,
    fetchCustomMeal : `/search.php?f=a`,
    fetchIdMeal : `/lookup.php?i=`,
    fetchMeals : `/filter.php?a=Canadian`,
    fetchNonAlcoholDrink : `/filter.php?a=Non_Alcoholic`
};

export default requests;