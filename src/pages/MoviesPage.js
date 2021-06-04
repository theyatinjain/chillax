import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RowWrapper from '../components/RowWrapper';
import MoviesCardsRow from '../components/MoviesCardsRow';
import requests from '../helpers/requests';
import axios from '../helpers/axios';

function MoviesPage() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.tmdb.get(requests.fetchTopRatedMovies);
            // console.log(request.data.results[19]);
            setMovie(request.data.results[19]);
        }
        fetchMovies();
    }, []);
    return (
        <div style={{ margin: "85px 0 0" }}>
            <h1 className="text-center h1">Movies Showdown</h1>
            <Container className='jumbotron' style={{ margin: '50px auto 0' }}>
                {movie && <Row>
                    <Col md={4} lg={4}>
                        <img
                            height={280}
                            className="align-self-center pl-5 mb-3"
                            src={movie && `https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                            alt={movie?.title}
                        />
                    </Col>
                    <Col md={8} xl={8}>
                        <h2>{movie.title}</h2>
                        <h5>Developer Choice</h5>
                        <h5>{movie.release_date.substring(0, 4)}</h5>
                        <p className='my-3'>{movie.overview}</p>
                        <h5>Adult Content: {movie.adult ? 'Yes' : 'No'}</h5>
                        <h5>Vote Average: {movie.vote_average}</h5>
                    </Col>
                </Row>}
            </Container>
            <Container fluid>
                <RowWrapper title="Discover">
                    <MoviesCardsRow fetchUrl={requests.fetchDiscover} itemsNumber='6' />
                </RowWrapper>
                <RowWrapper title="Top Rated">
                    <MoviesCardsRow fetchUrl={requests.fetchTopRatedMovies} itemsNumber='6' />
                </RowWrapper>
                <RowWrapper title="Trending Now">
                    <MoviesCardsRow fetchUrl={requests.fetchTrending} itemsNumber='6' />
                </RowWrapper>
                <RowWrapper title="Upcoming Movies">
                    <MoviesCardsRow fetchUrl={requests.fetchUpcoming} itemsNumber='6' />
                </RowWrapper>
            </Container>
        </div>
    )
}

export default MoviesPage;