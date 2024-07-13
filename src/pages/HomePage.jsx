import { Helmet } from "react-helmet";

function HomePage() {
    return <>
        <Helmet>
            <title>Faux Gear | Home</title>
        </Helmet>
        <div className="page-content">
            <h1>Home page</h1>
        </div>
    </>
}

export default HomePage;