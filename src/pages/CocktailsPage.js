import React from 'react';
import { Container } from 'react-bootstrap';
import FoodCardsRow from '../components/FoodCardsRow';
import RowWrapper from '../components/RowWrapper';
import requests from '../helpers/requests';

function CocktailsPage() {
    return (
        <div style={{ margin: "85px 0 0" }}>
            <h1 className="text-center h1">Cocktails Bar</h1>
            <Container fluid>
                <RowWrapper title='Discover'>
                    <FoodCardsRow fetchUrl={requests.fetchCustomDrink} type='cocktails' itemsNumber={6} />
                </RowWrapper>
                <RowWrapper title='Non-Alcoholic Drinks'>
                    <FoodCardsRow fetchUrl={requests.fetchNonAlcoholDrink} type='cocktails' itemsNumber={6} />
                </RowWrapper>
                <RowWrapper title='Alcoholic Drinks'>
                    <FoodCardsRow fetchUrl={requests.fetchAlcoholDrink} type='cocktails' itemsNumber={6} />
                </RowWrapper>
            </Container>
        </div>
    )
}

export default CocktailsPage;