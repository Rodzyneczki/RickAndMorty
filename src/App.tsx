import React from "react";
import Login from "./pages/Login";
import Characters from "./pages/Characters";
import "./App.scss";
import { RickAndMortyContextProvider } from "./context/RickAndMortyContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterDetails from "./pages/CharacterDetails";
import FavList from "./pages/FavList";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <RickAndMortyContextProvider>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/favourites">
                <FavList />
              </Route>
              <Route path="/character/:id">
                <CharacterDetails />
              </Route>
              <Route path="/characters">
                <Characters />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </Layout>
        </div>
      </RickAndMortyContextProvider>
    </Router>
  );
}

export default App;
