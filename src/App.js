import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket';
import Authentication from './components/Authentication';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <Ticket />
      <Authentication />
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
