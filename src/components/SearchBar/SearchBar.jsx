import styles from "./SearchBar.module.css"

const SearchBar = ({ handleSubmit }) => {

    const onFormSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        const query = form.elements.search.value;
        // console.log(query)
        handleSubmit(query)

    }

    return (
        <div>
            <form className={styles.form} onSubmit={onFormSubmit}>
                <label htmlFor="search">
                    <input className={styles.input} type="text" id="search" name="search" />
                </label>
                <button className={styles.button} type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar