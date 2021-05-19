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
      <RowWrapper title="Movies" url={requests.fetchTrending}/>
      <RowWrapper title="Series" url={requests.fetchTopRatedSeries}/>
      <RowWrapper title="Cocktails" url={requests.fetchNonAlcoholDrink}/>
      <RowWrapper title="Meals" url={requests.fetchMeals}/>
    </div>
  );
}

export default App;