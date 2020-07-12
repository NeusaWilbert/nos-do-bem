import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import Facebook from "./pages/Facebook";
import Home from "./pages/Home";

const App = () => (
  <div className="App">
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/facebook" component={Facebook} />
        </Switch>
      </BrowserRouter>
    </Layout>
  </div>
);

export default App;
