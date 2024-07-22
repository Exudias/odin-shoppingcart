import PropTypes from 'prop-types';
import styles from '../styles/ScrollingText.module.css';

function ScrollingText({text})
{
    return <div className={styles.container}>
        <div className={styles.scrollingText}>
            {text}
        </div>
    </div>
}

ScrollingText.propTypes = {
    text: PropTypes.string,
}

export default ScrollingText;