import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#282c34', padding: '1rem' }}>
      <Link to="/" style={{ color: '#61dafb', marginRight: '1rem' }}>Home</Link>
      <Link to="/form" style={{ color: '#61dafb', marginRight: '1rem' }}>Form</Link>
      <Link to="/table" style={{ color: '#61dafb' }}>Table</Link>
    </nav>
  );
}