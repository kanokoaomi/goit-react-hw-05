import { useEffect, useState } from "react"
import { popularMoviesForHomePage } from "../../api/movies"

import styles from "./HomePage.module.css"
import Loader from "../../components/Loader/Loader"


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
            <ul className={styles.listOfMovies}>
                {movies && movies.map((movie) => {
                    return (
                        <li className={styles.movieCard} key={movie.id}>
                            <img
                                src={`https:image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt="Poster of the film"
                            />
                            <p className={styles.titleOfMovie}>{movie.title}</p>
                        </li>
                    )
                })}
            </ul>

            {isLoading && <Loader />}

        </div>
    )
}

export default HomePage