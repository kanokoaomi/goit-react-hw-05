// import MovieCast from "../../components/MovieCast/MovieCast"
// import MovieReviews from "../../components/MovieReviews/MovieReviews"

import { useEffect, useRef, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { oneMovieDetails } from "../../api/movies"
import Loader from "../../components/Loader/Loader"

import styles from "./MovieDetailsPage.module.css"
import clsx from "clsx"
import noImage from "../../images/noImage.png"
import svg from "../../images/icons.svg"


const MovieDetailsPage = () => {

    const location = useLocation()
    const backLink = useRef(location.state?.from || "/movies")
    const navigate = useNavigate()
    const goBack = () => navigate(backLink)

    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setIsLoading(true)
                const data = await oneMovieDetails(movieId)
                setMovieDetails(data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }

        }

        fetchMovieDetails()
    }, [movieId])

    // if (!movieDetails) {
    //     return <p>Movie details not available.</p>;
    // }

    return (
        <div>
            {isLoading && <Loader />}
            {movieDetails && (
                <div className={styles.wrapperOfSection}>
                    <div className={styles.imgWrapper}>
                        <img
                            src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : noImage}
                            alt="Movie's poster" />
                    </div>
                    <div>
                        <div className={styles.buttonAndTitle}>
                            <Link to={backLink.current}>
                                <button onClick={goBack} className={styles.backButton}>
                                    <svg width="22px" height="22px">
                                        <use href={`${svg}#icon-arrow-left2`}></use>
                                    </svg>
                                </button>
                            </Link>
                            <h2 className={styles.title}>{movieDetails.title}</h2>
                        </div>
                        <p className={styles.movieText}><span className={styles.describtionText}>Description:</span> {movieDetails.overview}</p>
                        <p className={styles.movieText}><span className={styles.describtionText}>Reliese Date: </span>{movieDetails.release_date}</p>
                        <p className={styles.movieText}>
                            <span className={styles.describtionText}>Genres: </span>
                            {movieDetails.genres.map((genre, index) => (
                                <span key={index}>{genre.name}{index < movieDetails.genres.length - 1 ? ', ' : ''}</span>
                            ))}
                        </p>
                        <ul className={styles.reviewsAndCast}>
                            <li><NavLink state={{ from: backLink }} className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} to="cast">Cast</NavLink></li>
                            <li><NavLink state={{ from: backLink }} className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} to="reviews">Reviews</NavLink></li>
                        </ul>
                        <Outlet />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetailsPage