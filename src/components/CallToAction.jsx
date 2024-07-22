import styles from "../styles/CallToAction.module.css";
import PropTypes from "prop-types";

function CallToAction({preamble, buttonText, handleClick}) 
{
    return <div className={styles.main}>
        <h1 className={styles.preamble}>
            {preamble}
        </h1>
        <button className={styles.btn} onClick={handleClick}>{buttonText}</button>
    </div>
}

CallToAction.propTypes = {
    preamble: PropTypes.string,
    buttonText: PropTypes.string,
    handleClick: PropTypes.func,
}

export default CallToAction;