import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import woman from "../images/index_woman.jpg";
import man from "../images/index_man.jpg";

function Home() {
  return (
    <div className="homePage">
      <h3 className="header">Bershka</h3>
      <div className="col-12 d-flex">
        <div className="col-6 left text-white">
          <h5>... MODASINA GİT</h5>
          <h2>KADIN</h2>
        </div>
        <div className="col-6 right text-white">
          <h5>... MODASINA GİT</h5>
          <h2>ERKEK</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
