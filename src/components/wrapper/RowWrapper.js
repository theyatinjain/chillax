import React from 'react';
import { Container } from 'react-bootstrap';
import MoviesCardsRow from '../MoviesCardsRow';
import FoodCardsRow from '../FoodCardsRow';

function RowWrapper({ title, url}) {
    return (
        <div id={title}>
            <Container fluid>
                <h1>{title}</h1>
                {(title==="Movies" || title==="Series") && <MoviesCardsRow fetchUrl={url}/>}
                {(title==="Cocktails" || title==="Meals") && <FoodCardsRow fetchUrl={url} type={title}/>}
            </Container>
        </div>
    )
}

export default RowWrapper;