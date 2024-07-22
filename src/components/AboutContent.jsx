import styles from "./AboutContent.module.css";

function AboutContent()
{
    return <div className={`page-content ${styles.main}`}>
            <h1>This is not a real store!</h1>
            <h2>Created using the FakeStore API for products and ReactJS for the front end.</h2>
            <div className={styles.contacts}>
                <a href="https://github.com/Exudias/odin-shoppingcart" target="_blank">
                    <img className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                </a>
                <a href="https://www.linkedin.com/in/e-sarkisyan/" target="_blank">
                    <img className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
                </a>
            </div>
            
            <p>&copy; Exudias 2024. All rights reserved.</p>
        </div>
}

export default AboutContent;