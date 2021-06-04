import React, { useState, useEffect } from 'react'
import { Container, Card, CardDeck } from 'react-bootstrap';
import axios from '../helpers/axios';

function CardsRow({ fetchUrl, itemsNumber }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.tmdb.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results.slice(2, +itemsNumber + 2));
        }
        fetchMovies()
    }, [fetchUrl, itemsNumber]);

    return (
        <div className="CardsRow">
            <Container fluid>
                <CardDeck>
                    {movies.map((movie) =>
                    (<Card key={movie.id} className="mb-5">
                        <Card.Img
                            src={
                                movie &&
                                `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
                            }
                            height="320px"
                            variant="top"
                        />
                        <Card.Body>
                            <Card.Title>{movie?.title || movie?.name}</Card.Title>
                            <Card.Subtitle className="text-muted">{movie.release_date?.substring(0, 4) || movie.first_air_date?.substring(0, 4)}</Card.Subtitle>
                        </Card.Body>
                        <Card.Footer>
                            <a href={`https://www.youtube.com/results?search_query=${movie.title || movie.name}`} rel="noreferrer" target="_blank" className="btn btn-danger">Youtube</a>
                        </Card.Footer>
                    </Card>))}
                </CardDeck>
            </Container>
        </div>
    )
}

export default CardsRow;