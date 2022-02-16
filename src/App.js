import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ="/" exact element={<LoginPage/>}/>
          <Route path ="/home" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
