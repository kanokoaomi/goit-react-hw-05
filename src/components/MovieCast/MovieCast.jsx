import { useEffect, useState } from "react"
import { creditsOfTheMovie } from "../../api/movies"
import { useParams } from "react-router-dom"

import styles from "./MovieCast.module.css"
import noImage from "../../images/noImage.png"
import Loader from "../Loader/Loader"

const MovieCast = () => {
    const [movieCredits, setMovieCredits] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { movieId } = useParams()

    useEffect(() => {
        const fetchMovieCredits = async () => {
            try {
                setIsLoading(true)
                const data = await creditsOfTheMovie(movieId)
                setMovieCredits(data.cast || [])
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchMovieCredits()
    }, [movieId])

    // if (movieCredits.length === 0) {
    //     return <p>Movie cast is not available.</p>;
    // }

    return (
        <div>
            {isLoading && <Loader />}
            {movieCredits && (
                <ul className={styles.list}>
                    {movieCredits.map((person) => {
                        return (
                            <li key={person.id}>
                                <img
                                    className={styles.photo}
                                    src={person.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : noImage}
                                    alt="Actor's photo" />
                                <p className={styles.text}>{person.name} - <br /><b>{person.character}</b></p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default MovieCast