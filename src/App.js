import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Home from './components/Home/Home';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/projects/:projectId" element={<ProjectDetails />}>
          </Route>

        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
