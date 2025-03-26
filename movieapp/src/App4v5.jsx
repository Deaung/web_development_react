import Home from "./routes/Home";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App

// https://yts.mx/api/v2/movie_details.json?movie_id=${id}