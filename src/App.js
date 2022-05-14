import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" key={"Home"} element={<Home />}/>
        <Route exact path="/search" key={"Search"} element={<Search />}/>
      </Routes>
    </>
  );
}

export default App;
