// import { Route, Routes } from "react-router-dom"
// import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage"

import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { findMoviesWithQuery } from "../../api/movies"
import MovieList from "../../components/MovieList/MovieList"
import SearchBar from "../../components/SearchBar/SearchBar"
import Loader from "../../components/Loader/Loader"


import styles from "./MoviesPage.module.css"

const MoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const searchTerm = searchParams.get('q')
    const [isLoading, setIsLoading] = useState(false)
    const [showEmptyMessage, setShowEmptyMessage] = useState(false)

    const [movies, setMovies] = useState(null)

    const handleSubmit = (inputValue) => {
        if (inputValue.trim() === "") {
            setSearchParams({})
            setShowEmptyMessage(true)
            setMovies(null)
            return
        }
        setShowEmptyMessage(false)
        setSearchParams({ q: inputValue })
    }

    useEffect(() => {
        const fetchMovieWithQuery = async () => {
            try {
                if (!searchTerm) return

                setMovies(null)

                setIsLoading(true)

                const data = await findMoviesWithQuery(searchTerm)
                setMovies(data.results)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchMovieWithQuery()
    }, [searchTerm])

    return (
        <div className={styles.wrapper}>
            <SearchBar handleSubmit={handleSubmit} />
            <MovieList movies={movies} />
            {showEmptyMessage && <p className={styles.noMatches}>Type a search word to find a movie</p>}
            {!isLoading && movies && movies.length === 0 &&
                (<p className={styles.noMatches}>No matches found!</p>)}

            {isLoading && <Loader />}
        </div>
    )
}

export default MoviesPage