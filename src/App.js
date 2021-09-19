import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/checkout">
          <Header />

          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
