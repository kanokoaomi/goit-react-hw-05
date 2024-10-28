import { Oval } from "react-loader-spinner"
import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <Oval
            visible={true}
            height="40"
            width="40"
            color="#D61B2B"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass={styles.loader}
        />
    )
}

export default Loader