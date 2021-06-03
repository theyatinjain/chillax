import React from 'react';
import { Container } from 'react-bootstrap';
import MoviesCardsRow from '../CardsRow/MoviesCardsRow';
import FoodCardsRow from '../CardsRow/FoodCardsRow';

function RowWrapper({ title, url, isMovie, isFood, id }) {
    return (
        <div id={id} style={{ paddingTop: '80px' }}>
            <Container fluid>
                <h1>{title}</h1>
                {isMovie && <MoviesCardsRow fetchUrl={url} itemsNumber="5" />}
                {isFood && <FoodCardsRow fetchUrl={url} type={title} itemsNumber="5" />}
            </Container>
        </div>
    )
}

export default RowWrapper;