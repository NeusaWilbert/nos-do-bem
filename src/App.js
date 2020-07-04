import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";

const App = () => (
  <div className="App">
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Layout>
  </div>
);

export default App;
