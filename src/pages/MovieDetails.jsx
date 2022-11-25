import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import Movies from "../components/Movies.json";
import styles from "../components/MovieDetail.module.css"
import { get } from "../utils/httpClient";
import { useState } from "react";

//export function MovieDetails(){
const MovieDetails = () => {

const{movieId} = useParams(); //parm
const [movie, setMovie] = useState(null);
useEffect(()=>{
  get("/movie/"+movieId).then((data) =>{
  setMovie(data);
  })
},[movieId]);

if (!movie){
  return null;
}

  const imgaUrl = "https://image.tmdb.org/t/p/w500"+ movie.poster_path 
  return(
        <div className={styles.detailsContainer}>
             <img className={`${styles.col} ${styles.movieImage}` }
             src={imgaUrl} 
             alt={movie.title}
             />
              <div className={`${styles.col} ${styles.movieDetails}`}><p><strong>Title:</strong>{movie.title}</p>
              <p className={styles.firstItem}>
                <strong>Genres:</strong>{" "}
                {movie.genres.map(genre => genre.name).join(",")}
              </p>
                   <p><strong>Description:</strong> {movie.overview}</p>
              </div>
        </div>
  )
}

export default MovieDetails;