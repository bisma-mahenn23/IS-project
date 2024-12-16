import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Facebook from './Components/facbook';  // Corrected the import path
import InstagramLogin from './Components/instagram'; // Corrected the import path
import Miniclip from './Components/miniclip';

function App() {
  return (
    
    <BrowserRouter initialEntries={['/']}>
      <Routes>
        <Route path="/Facebook" element={<Facebook />} />
        <Route path="/" element={<Miniclip />} />
        <Route path="/Instagram" element={<InstagramLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
