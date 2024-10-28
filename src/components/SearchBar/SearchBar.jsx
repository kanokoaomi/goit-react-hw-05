

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
            <form onSubmit={onFormSubmit}>
                <label htmlFor="search">
                    <input type="text" id="search" name="search" />
                </label>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar