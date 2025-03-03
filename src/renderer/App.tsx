import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import '../styles/global.css';

function Main() {
  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="flex space-x-2">
        <Button variant="default">Submit</Button>
        <Input placeholder="Enter text" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
