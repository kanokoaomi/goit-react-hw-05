import { NavLink } from "react-router-dom"
import clsx from "clsx"
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <NavLink to="/" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)}>Home</NavLink>
            <NavLink to="/movies" className={({ isActive }) => clsx(styles.link, isActive && styles.activeLink)} end>Movies</NavLink>
        </nav>
    )
}

export default Navigation