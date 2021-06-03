import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import RowWrapper from '../components/wrapper/RowWrapper';
import requests from './../helpers/requests';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <RowWrapper title="Featured Movies" url={requests.fetchTrending} isMovie id="movies" />
      <RowWrapper title="Featured Series" url={requests.fetchTopRatedSeries} isMovie id="series" />
      <RowWrapper title="Featured Cocktails" url={requests.fetchNonAlcoholDrink} isFood id="cocktails" />
      <RowWrapper title="Featured Meals" url={requests.fetchMeals} isFood id="meals" />
    </div>
  );
}

export default App;