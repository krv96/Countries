import CountriesListComponent from './Components/CountriesList/CountriesListComponent';
import './App.css';
import NavigationComponent from './Components/Navigation/NavigationComponent';

function App() {
  return (
    <div className="container ">
      <div className='row'>
        <NavigationComponent></NavigationComponent>
      </div>
      <div className='row'>
        <CountriesListComponent></CountriesListComponent>
      </div> 
      
    </div>
  );
}

export default App;
