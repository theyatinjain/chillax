import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MoviesPage from '../pages/MoviesPage';
import SeriesPage from '../pages/SeriesPage';
import CocktailsPage from '../pages/CocktailsPage';
import MealsPage from '../pages/MealsPage';
import Layout from './Layout';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <LandingPage />
        </Route>
        <Route path="/series">
          <SeriesPage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/cocktails">
          <CocktailsPage />
        </Route>
        <Route path="/meals">
          <MealsPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;