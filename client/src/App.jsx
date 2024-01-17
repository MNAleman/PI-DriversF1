import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
//Se importan los componentes de las vistas y el navBar que es nuestra barra de navegacion
import Home from '../src/views/home/Home';
import Landing from '../src/Views/Landing/Landing';
import Details from '../src/Views/Details/Details';
import NavBar from '../src/Components/navBar/NavBar';
import Create from '../src/Views/Create/Create';

//estilado
import './App.css'

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
    <div>
      {pathname !== '/' && <NavBar />}

      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/home/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      </div>
    </>
  )
};

export default App;