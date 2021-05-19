import axios from 'axios';

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

const spoonacular = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes'
});

const cocktailDB = axios.create({
    baseURL:  'https://www.thecocktaildb.com/api/json/v1/1'
})

const instance = { tmdb, spoonac : spoonacular, cocktailDB}

export default instance;