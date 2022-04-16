import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CaixinhaPage from './pages/CaixinhaPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ="/" exact element={<LoginPage/>}/>
          <Route path ="/home" element={<HomePage/>}/>
          <Route path ="/caixinha" element={<CaixinhaPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
