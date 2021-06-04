import React, { useEffect, useState } from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import axios from '../helpers/axios';

function FoodCardsRow({ fetchUrl, type, itemsNumber }) {
    const [food, setFood] = useState([]);

    useEffect(() => {
        async function fetchDrinks() {
            const request = await axios.cocktailDB.get(fetchUrl);
            // console.log(request.data.drinks);
            setFood(request.data.drinks.slice(0, itemsNumber));
        }
        async function fetchMeals() {
            const request = await axios.mealDB.get(fetchUrl);
            // console.log(request.data.meals);
            setFood(request.data.meals.slice(0, itemsNumber));
        }
        if (type === "cocktails") fetchDrinks();
        else fetchMeals();
    }, [fetchUrl, type, itemsNumber]);

    return (
        <div className="FoodCardsRow">
            <Container fluid>
                <CardDeck>
                    {food.map((item) => (
                        <Card key={item.idDrink || item.idMeal} className="mb-5">
                            <Card.Img
                                src={item.strDrinkThumb || item.strMealThumb}
                                height="360px"
                                variant="top"
                            />
                            <Card.Body>
                                <Card.Title>{item?.strDrink || item.strMeal}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <a href={`https://www.youtube.com/results?search_query=${item.strDrink || item.strMeal}+drink`} rel="noreferrer" target="_blank" className="btn btn-danger">Youtube</a>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardDeck>
            </Container>
        </div>
    )
}

export default FoodCardsRow;