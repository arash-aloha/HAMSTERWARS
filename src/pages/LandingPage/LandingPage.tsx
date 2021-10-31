import { Link } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {

    
    return (
        <>
            <section className="container">
                <h2> May the <span className="cutest">cutest</span> hamster win </h2>
                <h3> Let the games begin </h3>
                <Link to="/home">
                    <figure className="img-container">
                        <button>Click me</button>
                    </figure>
                </Link>
            </section>
        </>
    )
}

export default LandingPage;