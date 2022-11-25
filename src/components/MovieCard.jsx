import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

//componente armado de card

/*export function MovieCard({movie}) {
const imgaUrl = "https://image.tmdb.org/t/p/w300"+ movie.poster_path
    return <li className={styles.movieCard}>
            <img width={230} height={345} className={styles.movieImage} src={imgaUrl} alt={movie.title} />
            <div>{movie.title}</div> 
           </li>;
}*/


const MovieCard = ({movie}) => { //recibimos movie lista
    const imgaUrl = "https://image.tmdb.org/t/p/w300"+ movie.poster_path
    return(
        <li className={styles.movieCard}>
            <Link to={"/movie/" + movie.id}>
                <img width={230} height={345} className={styles.movieImage} src={imgaUrl} alt={movie.title} />
                <div>{movie.title}</div> 
            </Link>
        </li>
    )
}

export default MovieCard;