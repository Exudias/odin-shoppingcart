import { Helmet } from "react-helmet";
import SplashImage from "../components/SplashImage";

function HomePage() {
    return <>
        <Helmet>
            <title>Faux Gear | Home</title>
        </Helmet>
        <div className="page-content">
            <SplashImage src="./home_splash.jpg" alt=""/>
        </div>
    </>
}

export default HomePage;