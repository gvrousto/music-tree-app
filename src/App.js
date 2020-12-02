import React from 'react';
import { SearchBar } from './features/searchBar/SearchBar';
import { MusicTree } from './features/musicTree/MusicTree';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path = "/search">
              <SearchBar />
            </Route>
            <Route path = "/musicTree">
              <MusicTree />
            </Route>
            <Route>
              <Redirect to="/search"/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
