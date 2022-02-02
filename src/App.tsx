import "./styles.css";
import Home from "./component/Home";
import './App.css';
import TasksList from "./component/TasksList";
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">

  {/*      <Home />*/}
          <BrowserRouter>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to={'/'}> Home </Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/TasksList/:id"} element={<TasksList />} />
              </Routes>
            </div>
          </BrowserRouter>
      </header>
    </div>
  );
}




