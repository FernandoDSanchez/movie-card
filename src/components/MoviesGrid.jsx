import { useEffect, useState } from "react";
import { MovieCard } from './MovieCard.jsx';
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient.js";
import { Spinner } from "./Spinner.jsx";
import {useLocation} from "react-router"

const useQuery = () => { 
    return URLSearchParams(useLocation().search)
}
export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const location = useLocation();
    const query = useQuery();
    console.log(query);
    useEffect(() => {
        setIsLoading(true);
        get("/discover/movie").then((data) => {
            setMovies(data.results);
            setIsLoading(false);
        });
    },[]);
    if (isLoading) {
        return (
            <Spinner/>
        )
    }
    return ( 
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => 
                    <MovieCard key={movie.id} movie={movie}/>
            )}
        </ul>
    );
}