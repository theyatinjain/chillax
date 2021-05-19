import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import axios from "../helpers/axios";
import requests from "../helpers/requests";

function Hero() {
  const [movie, setMovie] = useState("");
  const [meal, setMeal] = useState("");

  function getIndex() {
    let date = new Date();
    date = date.getDate();
    if (date > 1 && date <= 20) return date - 1;
    else return date - 20;
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.tmdb.get(requests.fetchDiscover);
      // console.log(request.data.results[getIndex()]);
      setMovie(request.data.results[getIndex()]);
    }
    async function fetchRecipe() {
      const request = await axios.mealDB.get(`${requests.fetchIdMeal}52768`);
      // console.log(request.data.meals[0]);
      setMeal(request.data.meals[0]);
    }
    fetchMovie();
    fetchRecipe();
  }, []);

  return (
    <div style={{ margin: "100px 0 50px" }}>
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="mb-5">
              <Card.Img
                src={
                  movie &&
                  `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
                }
                height="360px"
                variant="top"
              />
              <Card.Body>
                <Card.Title>{movie?.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Featured Movie
                </Card.Subtitle>
                <Card.Text>{truncate(movie?.overview, 200)}</Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Rating : {movie.vote_average}</ListGroup.Item>
                <ListGroup.Item>Popularity : {movie.popularity}</ListGroup.Item>
                <ListGroup.Item>
                  Release Year: {movie.release_date?.substring(0,4)}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <a href={`https://www.youtube.com/results?search_query=${movie.title}`} rel="noreferrer" target="_blank" className="btn btn-danger">Youtube</a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                src={meal && `${meal.strMealThumb}`}
                height="360px"
                width="100%"
                variant="top"
              />
              <Card.Body>
                <Card.Title>{meal.strMeal}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Featured Meal
                </Card.Subtitle>
                <Card.Text>{truncate(meal.strInstructions, 200)}</Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Origin : {meal.strArea}
                </ListGroup.Item>
                <ListGroup.Item>
                  Category : {meal.strCategory}
                </ListGroup.Item>
                <ListGroup.Item>
                  Tags : {meal.strTags}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <a href={`https://www.youtube.com/results?search_query=${meal.strMeal}`} rel="noreferrer" target="_blank" className="btn btn-danger">Youtube</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
