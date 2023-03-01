import './App.css';
import { Route, Switch } from 'react-router';
import List from './components/Home/List.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/List" component={List} />
        <Route exact path="/" component={List} />
      </Switch>
    </div>
  );
}

export default App;
