import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Record from './components/Record';
import Main from './pages/Main';
import Rank from './pages/Rank';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<Record />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
    </div>
  );
}

export default App;
