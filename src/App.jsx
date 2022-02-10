import { MovieDetails } from './pages/MovieDetails.jsx';
import { LandingPage } from './pages/LandingPage.jsx';
import styles from './App.module.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    
    } from "react-router-dom";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/"><h1 className={styles.title}>Movies</h1></Link> 
            </header>
            <main>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/movies/:movie6Id" element={<MovieDetails/>}></Route>
            </Routes>
            </main>
        </Router>
    );
}