import logo from "./logo.svg";
import "./App.css";
import Add from "./Components/Add";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import List from "./Components/List";
import Edit from "./Components/Edit";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
