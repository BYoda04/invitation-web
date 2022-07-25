import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Corners from './components/corners/Corners';
import Indications from './components/indications/Indications';
import Home from './views/Home';

function App() {
  return (
    <HashRouter>
      <Indications />
      <Corners />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
