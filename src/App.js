import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages";
import Games from "./pages/Games";

function App() {
  return (
    <Router>
      <Header>
        <Games />
      </Header>
    </Router>
  );
}

export default App;
