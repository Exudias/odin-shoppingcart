import SplashImage from "../components/SplashImage";
import ScrollingText from "../components/ScrollingText";
import CallToAction from "../components/CallToAction";
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const navigate = useNavigate();

    const scrollingText = "Promotions every day! Get your free X today. Alternatively, check out our cool new items.";
    const preambleText = "Check out our newest offers! Something is bound to catch your eye!";

    function navigateToShop()
    {
        navigate("./products");
    }

    document.title = "Faux Gear | Home";

    return <>
        <div className="page-content">
            <SplashImage src="./home_splash.jpg" alt="" credit="Photo by Godisable Jacob" creditLink="https://www.pexels.com/photo/woman-in-pink-and-white-floral-jacket-and-pants-sitting-on-hood-of-car-886404/"/>
            <ScrollingText text={scrollingText}/>
            <CallToAction preamble={preambleText} buttonText={"Shop"} handleClick={navigateToShop}/>
        </div>
    </>
}

export default HomePage;