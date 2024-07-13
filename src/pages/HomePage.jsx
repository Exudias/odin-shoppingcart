import { Helmet } from "react-helmet";
import SplashImage from "../components/SplashImage";
import ScrollingText from "../components/ScrollingText";

function HomePage() {
    const scrollingText = "Promotions every day! Get your free X today. Alternatively, check out our cool new items.dsaadsdsaasddsadasadsdasdsadsadsdassa gsfdg sahagsgsa ds fdshfsdahsfadhlhf lasdfa hfasdhlfadhlk fashl kafhshlfadh lfad hfadsh lfasdhl falh ksdlkh fsdl khafsdlhkfads lhka flshkdlkhafdslkhfadslkhfasdlkhfasldkhlhkfadshlkfsdal hkafds lhkafsd hlkfs dhlkf dhslkf ahldks hklafsdhlk";

    return <>
        <Helmet>
            <title>Faux Gear | Home</title>
        </Helmet>
        <div className="page-content">
            <SplashImage src="./home_splash.jpg" alt=""/>
            <ScrollingText text={scrollingText}/>
        </div>
    </>
}

export default HomePage;