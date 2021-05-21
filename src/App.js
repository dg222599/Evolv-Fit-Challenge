import React from "react";
import "./styles/App.scss";

import Navbar from "./components/elements/Navbar";
import Dishes from "./components/dishes/Dishes";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddDish from "./components/dishes/AddDish";
import EditDish from "./components/dishes/EditDish";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App app">
          <Navbar />
          <div className="container">
            <div className="">
              <Switch>
                <Route exact path="/" component={Dishes} />
                <Route exact path="/dishes/add" component={AddDish} />
                <Route exact path="/dishes/edit/:id" component={EditDish} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
