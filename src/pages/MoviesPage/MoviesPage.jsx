// import { Route, Routes } from "react-router-dom"
// import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage"

import { useSearchParams } from "react-router-dom"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useEffect, useState } from "react"
import { findMoviesWithQuery } from "../../api/movies"
import Loader from "../../components/Loader/Loader"


const MoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const searchTerm = searchParams.get('q')
    const [isLoading, setIsLoading] = useState(false)

    const [movies, setMovies] = useState(null)

    const handleSubmit = (inputValue) => {
        // console.log(inputValue, searchParams)
        setSearchParams({ q: inputValue })
    }

    useEffect(() => {
        const fetchMovieWithQuery = async () => {
            try {
                if (!searchTerm) return

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
        <div>
            <SearchBar handleSubmit={handleSubmit} />
            <ul>
                {movies && movies.map((movie) => {
                    <li key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="Poster of the film"
                        />
                        <p>{movie.title}</p>
                    </li>
                })}
            </ul>

            {isLoading && <Loader />}
        </div>
    )
}

export default MoviesPage