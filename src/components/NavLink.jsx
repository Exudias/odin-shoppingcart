import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./NavLink.module.css";

function NavLink({path, title})
{
    const location = useLocation();
    const isCurrentlyHere = location.pathname === path;

    return <Link to={path} className={isCurrentlyHere ? styles.disabledLink : styles.enabledLink}>{title}</Link>;
}

NavLink.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
}

export default NavLink;