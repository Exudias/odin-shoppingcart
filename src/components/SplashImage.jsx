import styles from "./SplashImage.module.css";
import PropTypes from 'prop-types';

function SplashImage({src, alt})
{
    return <div className={styles.splashContainer}>
            <img src={src} className={styles.splashImage} alt={alt}/>
        </div>
}

SplashImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}

export default SplashImage;