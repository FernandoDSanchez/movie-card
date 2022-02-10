import {FaSpinner} from "react-icons/fa"
import styles from "./Spinner.module.css"
export const Spinner = () => {
    return <div className={styles.spinner}>
        <FaSpinner size={70} className={styles.spinning}/>
        </div>;
}

