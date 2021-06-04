const TMDB_KEY = '76592f12cad9234e1be53581c60446d6';

const requests = {
    tmdbKey: `api_key=${TMDB_KEY}`,
    fetchTrending: `/trending/all/week?api_key=${TMDB_KEY}&language=en-US`,
    fetchTrendingTV: `/tv/popular?api_key=${TMDB_KEY}`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${TMDB_KEY}`,
    fetchTopRatedSeries: `/tv/top_rated?api_key=${TMDB_KEY}`,
    fetchDiscover: `/discover/movie?api_key=${TMDB_KEY}`,
    fetchDiscoverTV: `/discover/tv?api_key=${TMDB_KEY}`,
    fetchUpcoming: `/movie/upcoming?api_key=${TMDB_KEY}`,
    fetchLatest: `/movie/latest?api_key=${TMDB_KEY}`,
    fetchAiringNow: `/tv/on_the_air?api_key=${TMDB_KEY}`,
    fetchCustomDrink: `/filter.php?c=Cocktail`,
    fetchCustomMeal: `/search.php?f=a`,
    fetchDiscoverMeals: `/filter.php?c=Pasta`,
    fetchVegMeals: `/filter.php?c=Vegetarian`,
    fetchChickenMeals: `/filter.php?c=Chicken`,
    fetchSeafoodMeals: `/filter.php?c=Seafood`,
    fetchIdMeal: `/lookup.php?i=`,
    fetchMeals: `/filter.php?a=Canadian`,
    fetchNonAlcoholDrink: `/filter.php?a=Non_Alcoholic`,
    fetchAlcoholDrink: `/filter.php?a=Alcoholic`,
};

export default requests;