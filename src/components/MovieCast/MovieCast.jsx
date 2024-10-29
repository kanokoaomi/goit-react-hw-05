import { useEffect, useState } from "react"
import { creditsOfTheMovie } from "../../api/movies"
import { useParams } from "react-router-dom"

import styles from "./MovieCast.module.css"
import noImage from "../../images/noImage.png"

const MovieCast = () => {
    const [movieCredits, setMovieCredits] = useState(null)
    const { movieId } = useParams()
    useEffect(() => {
        const fetchMovieCredits = async () => {
            try {
                const data = await creditsOfTheMovie(movieId)
                setMovieCredits(data.cast || [])
            } catch (error) {
                console.log(error)
            }
        }

        fetchMovieCredits()
    }, [movieId])

    if (!movieCredits || movieCredits.length === 0) {
        return <p>Movie cast is not available.</p>;
    }

    return (
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
    )
}

export default MovieCast