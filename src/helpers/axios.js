import axios from 'axios';

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

const cocktailDB = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

const mealDB = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1'
})

const instance = { tmdb, cocktailDB, mealDB }

export default instance;