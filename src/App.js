import CountriesListComponent from './Components/CountriesList/CountriesListComponent';
import './App.css';
import NavigationComponent from './Components/Navigation/NavigationComponent';
import SearchCountryComponent from './Components/SearchCountry/SearchCountryComponent';
import FilterCountriesComponent from './Components/FilterCountries/FilterCountriesComponent';

function App() {
  return (
    <div >

      <div className='row' id="navigation">
        <NavigationComponent></NavigationComponent>
      </div>

      <div className="row" id="countriesList">
      <div className="col-sm-10">
      <SearchCountryComponent></SearchCountryComponent>
      </div>
      <div className="col-sm-2">
      <FilterCountriesComponent></FilterCountriesComponent>
      </div>
    </div>

      <div className='row' id="countriesList">
        <CountriesListComponent></CountriesListComponent>
      </div> 
      
    </div>
  );
}

export default App;
