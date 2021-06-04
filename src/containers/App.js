import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MoviesPage from '../pages/MoviesPage';
import SeriesPage from '../pages/SeriesPage';
import CocktailsPage from '../pages/CocktailsPage';
import MealsPage from '../pages/MealsPage';
import Layout from './Layout';

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
          <MealsPage />
        </Route>
        <Route path="/meals">
          <CocktailsPage />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;