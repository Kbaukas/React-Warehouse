import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MainWindow from "./MainWindow";
import EditForm from "./EditForm";

import NavBar from "./NavBar";
import Preview from "./Preview";

export class Home extends Component {
  render() {
    return (
      <div style={{ minWidth: "85vw" }}>
        <NavBar />
        <Link
          to={{
            pathname: "/products",
            hash: "#submit",
            search: "?quick-submit=true",
          }}
        ></Link>
        <Switch>
          {/* <h1>Home</h1> */}
          <Route exact path="/products" render={() => <MainWindow />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/products/preview" render={() => <Preview />} />
        </Switch>
      </div>
    );
  }
}

export default Home;
