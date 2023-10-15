import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; // Your custom styles
import Registration from './components/Registration';
import Login from './components/Login';
import AdminPage from './Pages/AdminPage';
import AssignWork from './Pages/AssignWork';
import UpdateWorkers from './Pages/UpdateWorkers';
import ViewWorkers from './Pages/ViewWorkers';


function App() {
  return (
 
      <Router>
        <Routes>
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/assign-work" element={<AssignWork />} />
          <Route path="/update-workers" element={<UpdateWorkers />} />
          <Route path="/view-workers" element={<ViewWorkers />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>

  );
}

export default App;
