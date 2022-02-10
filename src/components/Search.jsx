import styles from "./Search.module.css";
import {FaSearch} from "react-icons/fa"
import { useState } from "react";
import {useNavigate} from "react-router";


export const Search = () => {
    const [searchText, setSearchText] = useState("Search movie")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText)
    }
    return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div action="" className={styles.searchBox}>
            <input type="text" className={styles.searchInput} value={searchText} onChange={e => setSearchText(e.target.value)}/>
            <button type="submit" className={styles.searchButton}>
            <FaSearch size={20}/>
            </button>
        </div>
    </form>
    )
}
