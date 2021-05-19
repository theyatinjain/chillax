import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import axios from "../../helpers/axios";
import requests from "../../helpers/requests";

function Hero() {
  const [movie, setMovie] = useState("");
  const [recipe, setRecipe] = useState("");

  function getIndex() {
    let date = new Date();
    date = date.getDate();
    if (date > 1 && date <= 20) return date - 1;
    else return date - 20;
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  async function getRecipe(id) {
    const request = await axios.spoonac.get(
      `/${id}/information?${requests.spKey}&includeNutrition=false`
    );
    // console.log(request.data);
    setRecipe(request.data);
  }

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.tmdb.get(requests.fetchDiscover);
      // console.log(request.data.results[getIndex()]);
      setMovie(request.data.results[getIndex()]);
    }
    async function fetchRecipe() {
      const request = await axios.spoonac.get(requests.fetchCustomRecipe);
      // console.log(request.data.results[getIndex()%10]);
      getRecipe(request.data?.results[getIndex() % 10].id);
    }
    fetchMovie();
    fetchRecipe();
  }, []);

  return (
    <div style={{ margin: "100px 0" }}>
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="mb-5">
              <Card.Img
                src={
                  movie &&
                  `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                }
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
                  Release Date: {movie.release_date}
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
                src={recipe && `${recipe.image}`}
                height="357px"
                width="100%"
                variant="top"
              />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Featured Recipe
                </Card.Subtitle>
                <Card.Text>{truncate(recipe.summary, 200)}</Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Spoonacular Score : {recipe.spoonacularScore}
                </ListGroup.Item>
                <ListGroup.Item>
                  Health Score : {recipe.healthScore}
                </ListGroup.Item>
                <ListGroup.Item>
                  Source Name : {recipe.sourceName}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <a href={recipe.sourceUrl} rel="noreferrer" target="_blank" className="btn btn-danger">Blog</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
