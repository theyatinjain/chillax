import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import RowWrapper from '../components/RowWrapper';
import requests from '../helpers/requests';
import MoviesCardsRow from '../components/MoviesCardsRow';
import FoodCardsRow from '../components/FoodCardsRow';

function LandingPage() {
    return (
        <Fragment>
            <Hero />
            <RowWrapper title="Featured Movies">
                <MoviesCardsRow fetchUrl={requests.fetchTrending} itemsNumber="5" />
            </RowWrapper>
            <RowWrapper title="Featured Series">
                <MoviesCardsRow fetchUrl={requests.fetchTopRatedMovies} itemsNumber="5" />
            </RowWrapper>
            <RowWrapper title="Featured Cocktails" url={requests.fetchNonAlcoholDrink} >
                <FoodCardsRow fetchUrl={requests.fetchNonAlcoholDrink} type="cocktails" itemsNumber="5" />
            </RowWrapper>
            <RowWrapper title="Featured Meals">
                <FoodCardsRow fetchUrl={requests.fetchMeals} type="meals" itemsNumber="5" />
            </RowWrapper>
        </Fragment>
    )
}

export default LandingPage;