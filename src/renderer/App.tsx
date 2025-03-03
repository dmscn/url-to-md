import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';

function Hello() {
  return <h1>Hello world</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
