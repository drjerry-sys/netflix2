import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Navbar, Watch, Register, Login } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/watch"><Watch /></Route>
        <Route path="/register"><Register /></Route>
      </Routes>
    </div>
  );
}

export default App;