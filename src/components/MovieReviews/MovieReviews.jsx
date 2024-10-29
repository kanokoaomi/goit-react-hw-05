import { useEffect, useState } from "react"
import { reviewsOfTheMovie } from "../../api/movies"
import { useParams } from "react-router-dom"
import styles from "./MovieReviews.module.css"

const MovieReviews = () => {
    const [movieReviews, setMovieReviews] = useState(null)
    const { movieId } = useParams()
    useEffect(() => {
        const fetchMovieCredits = async () => {
            try {
                const data = await reviewsOfTheMovie(movieId)
                setMovieReviews(data.results)
            } catch (error) {
                console.log(error)
            }
        }

        fetchMovieCredits()
    }, [movieId])

    if (!movieReviews) {
        return <p>Movie reviews is not available.</p>;
    }

    if (movieReviews.length === 0) {
        return <p>No reviews for the movie yet.</p>;
    }

    return (
        <ul className={styles.list}>
            {movieReviews.map((review) => {
                return (
                    <li className={styles.commentWrapper} key={review.id}>
                        <p className={styles.author}><b>{review.author}</b></p>
                        <p>{review.content}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default MovieReviews