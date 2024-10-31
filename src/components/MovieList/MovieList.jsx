import styles from "./MovieList.module.css"
import noImage from "../../images/noImage.png"
import { Link, useLocation } from "react-router-dom"

const MovieList = ({ movies }) => {

    const location = useLocation()

    return (
        <div>
            <ul className={styles.listOfMovies}>
                {movies && movies.map((movie) => {
                    return (
                        <li className={styles.movieCard} key={movie.id}>
                            <Link to={`/movies/${movie.id}`}
                                state={{ from: location }}
                            >
                                <div className={styles.imgWrapper}>
                                    <img
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noImage}
                                        alt="Poster of the film"
                                        className={styles.img}
                                    />
                                </div>
                                <div className={styles.textWrapper}>
                                    <p className={styles.titleOfMovie}>{movie.title}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MovieList