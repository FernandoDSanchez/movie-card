import styles from "./MovieCard.module.css";
import {
    Link,
    
    } from "react-router-dom";

export function MovieCard({movie}) {
    const {title , poster_path} = movie;
    const imgUrl = "https://image.tmdb.org/t/p/w300" + poster_path
    
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
            <img  
                width={230} 
                height={345}
                src={imgUrl} 
                alt={title} 
                className={styles.movieImage}
            />
            <div>{title}</div>
            </Link>
        </li>);
}
