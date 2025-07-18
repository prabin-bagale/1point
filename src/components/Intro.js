import Banner1 from "../img/intro-carousel/1.jpg";
import Banner2 from "../img/intro-carousel/2.jpg";
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-container">
        <div
          id="introCarousel"
          className="carousel  slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators" />
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="carousel-background">
                <img src={Banner1} alt="" className="img-responsive" />
              </div>
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2>Medical Drugstore &amp;</h2>
                  <h2>Pharmacy Store</h2>
                  <p>
                    <i>"Medicine at your Door Step."</i>
                  </p>
                  <Link to = '/orderNow'>
                    <button className="modal-open" data-modal="modal1">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-background">
                <img src={Banner2} alt="" className="img-responsive" />
              </div>
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2>Medical Drugstore &amp;</h2>
                  <h2>Pharmacy Store</h2>
                  <p>
                    <i>"Medicine at your Door Step."</i>
                  </p>
                  <button className="modal-open" data-modal="modal1">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#introCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon ion-chevron-left"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#introCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon ion-chevron-right"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
