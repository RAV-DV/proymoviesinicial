import MovieCard  from "./MovieCard";
//import movies from "./Movies.json";
import styles from "./MovieGrid.module.css";
import { useEffect } from "react";
//import { ResultType } from "@remix-run/router/dist/utils";
import { useState } from "react";
import { get } from "../utils/httpClient"; //funcion api
//C:\ProyectosNode\moviesAdm\movies-react\src\components\MoviesGrid.jsx
const MoviesGrid =()=> {
   // let movies = [];
    //const moviesState = useState([]);
    //const movies = moviesState[1];

    const [movies, setMovies] = useState([]); //Estado array peliculas

    useEffect(()=>{  //use efect ... hoock efecto secundario, una ves cargado el componente el ejecutara un efecto secundario
       get("/discover/movie").then((data)=>{  //busca array con discover y cod
        setMovies(data.results);//results solo los resultados
       });
    }, []);// retorna que cuando este vacio corte la instruccion 

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>  //funcion de flecha no requiere llaves ni return, clic derecho convert ...
             <MovieCard key={movie.id} movie={movie}/>
            )}
        </ul>
    );
}

export default MoviesGrid;