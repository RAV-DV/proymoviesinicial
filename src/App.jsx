//import MoviesGrid from "./components/MoviesGrid";
import styles from "./components/App.module.css";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";// directorios

import MovieDetails  from "./pages/MovieDetails";
import  LandingPage  from "./pages/LandingPage";

//titulo con css, llamado a componente MoviesGrid/>

export function App(){

    return (
    <Router>
    <header>
      
          <Link to ="/"><h1 className={styles.title}>Movies</h1></Link>

      {/* <Link to="/movie">Movie</Link>
       <Link to="/">Home</Link>*/}

    </header>
    <main>  
    <Routes>
          <Route exact path="/movie/:movieId" element={ <MovieDetails/> }>Detalle</Route>
          <Route path="/" element={ <LandingPage/> }>Home</Route>
  
    </Routes>

    </main>
    </Router>
)
   
}
