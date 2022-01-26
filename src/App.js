import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Navbar, Watch, Register, Login } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Watch />
      <Routes>
        <Route path="/" app={Home} />
        <Route path="/login" app={Login} />
        <Route path="/watch" app={Watch} />
        <Route path="/register" app={Register} />
      </Routes>
    </div>
  );
}

export default App;
