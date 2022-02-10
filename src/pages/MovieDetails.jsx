import { useParams } from 'react-router-dom';

import styles from './MovieDetail.module.css'
import { useEffect, useState } from "react"
import { get } from "../utils/httpClient.js";
import {Spinner} from "../components/Spinner"
export function MovieDetails() {
    const { movie6Id } = useParams() 
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movie6Id)
        .then(data => {
            setMovie(data);
            setIsLoading(false);
        }) 
    },[movie6Id])

    if (isLoading) {
        return <div><Spinner/></div>
    }

    if (!movie) {
        return null;
    }
    let {title, poster_path , overview, genres} = movie;
    const imgUrl = "https://image.tmdb.org/t/p/w500" + poster_path 
    return (
        <div className={styles.detailsContainer}>
            <img src={imgUrl} alt={title}  className={`${styles.col} ${styles.movieImage}`}/>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title: </strong>{title}</p>
                <p><strong>Description: </strong>{overview}</p>
                <p><strong>Genre:</strong>s {genres.map(genre => genre.name).join(", ")}</p>
            </div>
        </div>
    )
}