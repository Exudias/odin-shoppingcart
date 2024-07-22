import styles from "../styles/SplashImage.module.css";
import PropTypes from 'prop-types';

function SplashImage({src, alt, credit, creditLink})
{
    return <div className={styles.splashContainer}>
            <img src={src} className={styles.splashImage} alt={alt}/>
            {credit && <a className={styles.credit} href={creditLink}>{credit}</a>}
        </div>
}

SplashImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    credit: PropTypes.string,
    creditLink: PropTypes.string,
}

export default SplashImage;