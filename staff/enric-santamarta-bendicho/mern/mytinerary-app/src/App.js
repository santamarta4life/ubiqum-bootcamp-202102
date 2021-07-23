import Landing from './components/Landing'
import Cities from './components/Cities'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Itinerary from './components/Itinerary';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/cities' component={Cities} />
          <Route exact path='/itinerary' component={Itinerary} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
