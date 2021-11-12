
import { Link } from "react-router-dom";
import logo from '../../components/Nav/logo.png'

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <main>
        <section className="container-landingpage">
            <div className="headerslanding">
                <h2> Welcome to HAMSTER WARS! </h2>
                <h2>
                    {" "}
                    If you LOVE <span className="cutest">cute</span> hamsters, this is the
                    place to be.{" "}
                </h2>
            </div>
            <figure className="landingpage-figure">
                <Link to="/home" className="landingpage-logo">
                <img src={logo} alt="Logo" />
                </Link>
            </figure>
        </section>
    </main>

  );
};

export default LandingPage;
