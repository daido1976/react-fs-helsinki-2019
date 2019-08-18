import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
  </div>
);

const Notes = () => (
  <div>
    <h2>Notes</h2>
  </div>
);

const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);

export const ReactRouter = () => {
  const padding = { padding: 5 };

  return (
    <div>
      <Router>
        <div>
          <div>
            <Link style={padding} to="/">
              home
            </Link>
            <Link style={padding} to="/notes">
              notes
            </Link>
            <Link style={padding} to="/users">
              users
            </Link>
          </div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/notes" render={() => <Notes />} />
          <Route path="/users" render={() => <Users />} />
        </div>
      </Router>
    </div>
  );
};
