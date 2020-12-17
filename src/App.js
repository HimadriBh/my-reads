import { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home'
import Search from "./Search";
import './App.css';

class App extends Component {

 render() {
    return (
    <div className="App">
      <Route exact path="/" component={Home}  />
      <Route exact path="/search" component={Search}  />
    </div>
  );
 }
}

export default App;
