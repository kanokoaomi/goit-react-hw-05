// import MovieCast from "../../components/MovieCast/MovieCast"
// import MovieReviews from "../../components/MovieReviews/MovieReviews"

import { Link, Outlet } from "react-router-dom"


const MovieDetailsPage = () => {
    return (
        <div>
            <h2>Movie Details</h2>
            <nav>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage