import AboutMission from "../img/about-mission.jpg";
import AboutVision from "../img/about-vision.jpg";
import AboutApproach from "../img/about-approach.jpg";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <header className="section-header">
            <h3>About Us</h3>
            <p>
              Need medicines? Get it delivered at your doorstep. Anytime.
              Anywhere.
            </p>
          </header>
          <div className="row about-cols">
            <div className="col-md-4 wow fadeInUp">
              <div className="about-col">
                <div className="img">
                  <img src={AboutMission} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-speedometer-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Mission</a>
                </h2>
                <p>
                  To provide safe, high quality medicine within few hours of
                  ordering at your door steps.
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-col">
                <div className="img">
                  <img src={AboutVision} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-eye-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Vision</a>
                </h2>
                <p>
                  To establish a service that you can access from anywhere and
                  at anytime to fulfill your medicine desires.
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-col">
                <div className="img">
                  <img src={AboutApproach} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Approach</a>
                </h2>
                <p>
                  Our unique approach combines new technology along with our
                  dedication to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
