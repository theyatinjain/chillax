import React from 'react';
import { Container } from 'react-bootstrap';
import FoodCardsRow from '../components/FoodCardsRow';
import RowWrapper from '../components/RowWrapper';
import requests from '../helpers/requests';

function MealsPage() {
    return (
        <div style={{ margin: "85px 0 0" }}>
            <h1 className="text-center h1">Meals Restro</h1>
            <Container fluid>
                <RowWrapper title='Discover'>
                    <FoodCardsRow fetchUrl={requests.fetchDiscoverMeals} type='meals' itemsNumber={6} />
                </RowWrapper>
                <RowWrapper title='Chicken Dishes'>
                    <FoodCardsRow fetchUrl={requests.fetchChickenMeals} type='meals' itemsNumber={6} />
                </RowWrapper>
                <RowWrapper title='Vegetarian Dishes'>
                    <FoodCardsRow fetchUrl={requests.fetchVegMeals} type='meals' itemsNumber={6} />
                </RowWrapper>
                <RowWrapper title='Seafood'>
                    <FoodCardsRow fetchUrl={requests.fetchSeafoodMeals} type='meals' itemsNumber={6} />
                </RowWrapper>
            </Container>
        </div>
    )
}

export default MealsPage
