import React from "react";
import { Switch, Route } from "react-router-dom";
import UserList from "../components/UserList";
import Login from "../components/Login";

function Router() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route exact path="/userlist" component={UserList} ></Route>
      </Switch>
    </React.Fragment>
  );
}

export default Router;
