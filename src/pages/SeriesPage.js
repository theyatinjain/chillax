import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RowWrapper from '../components/RowWrapper';
import MoviesCardsRow from '../components/MoviesCardsRow';
import requests from '../helpers/requests';
import axios from '../helpers/axios';

function SeriesPage() {
    const [show, setShow] = useState();
    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.tmdb.get(requests.fetchTopRatedSeries);
            console.log(request.data.results[19]);
            setShow(request.data.results[19]);
        }
        fetchMovies();
    }, []);
    return (
        <div style={{ margin: "85px 0 0" }}>
            <h1 className="text-center h1">Series Showdown</h1>
            <Container className='jumbotron' style={{ margin: '50px auto 0' }}>
                {show && <Row>
                    <Col md={4} lg={4}>
                        <img
                            height={280}
                            className="align-self-center pl-5 mb-3"
                            src={show && `https://image.tmdb.org/t/p/original/${show?.poster_path}`}
                            alt={show?.title}
                        />
                    </Col>
                    <Col md={8} xl={8}>
                        <h2>{show.name}</h2>
                        <h5>Developer Choice</h5>
                        <h5>{show.first_air_date?.substring(0, 4)}</h5>
                        <p className='my-3'>{show.overview}</p>
                        <h5>Adult Content: {show.adult ? 'Yes' : 'No'}</h5>
                        <h5>Vote Average: {show.vote_average}</h5>
                    </Col>
                </Row>}
            </Container>
            <Container fluid>
                <RowWrapper title="Discover">
                    <MoviesCardsRow fetchUrl={requests.fetchDiscoverTV} itemsNumber='6' />
                </RowWrapper>
                <RowWrapper title="Top Rated">
                    <MoviesCardsRow fetchUrl={requests.fetchTopRatedSeries} itemsNumber='6' />
                </RowWrapper>
                <RowWrapper title="Popular Now">
                    <MoviesCardsRow fetchUrl={requests.fetchTrendingTV} itemsNumber='6' />
                </RowWrapper>
                <RowWrapper title="Airing Now">
                    <MoviesCardsRow fetchUrl={requests.fetchAiringNow} itemsNumber='6' />
                </RowWrapper>
            </Container>
        </div>
    )
}

export default SeriesPage
