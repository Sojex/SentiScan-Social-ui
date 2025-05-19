import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import TablePage from './components/TablePage';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;