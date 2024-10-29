import { useEffect, useState } from "react"
import { popularMoviesForHomePage } from "../../api/movies"

import styles from "./HomePage.module.css"
import Loader from "../../components/Loader/Loader"
import MovieList from "../../components/MovieList/MovieList"


const HomePage = () => {

    const [movies, setMovies] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                if (movies !== null) return

                setIsLoading(true)

                const data = await popularMoviesForHomePage()
                setMovies(data.results)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPopularMovies()
    }, [movies])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>The most popular movies in a week</h1>
            <span className={styles.after}></span>
            <MovieList movies={movies} />
            {isLoading && <Loader />}

        </div>
    )
}

export default HomePage