const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <header className="section-header wow fadeInUp">
          <h3>Services</h3>
          <p>We deliver medicine at your door steps.</p>
        </header>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 box wow bounceInUp"
            data-wow-duration="1.4s"
          >
            <div className="icon">
              <i className="ion-ios-analytics-outline" />
            </div>
            <h4 className="title">
              <a href>Set Delivery Location</a>
            </h4>
            <p className="description">
              Select your prescribed medicine and where you want it to be
              delivered.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 box wow bounceInUp"
            data-wow-duration="1.4s"
          >
            <div className="icon">
              <i className="ion-ios-paper-outline" />
            </div>
            <h4 className="title">
              <a href>Wide range of medicine</a>
            </h4>
            <p className="description">
              We are ready with the medicine you require to drop it off at your
              doorstep.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 box wow bounceInUp"
            data-wow-duration="1.4s"
          >
            <div className="icon">
              <i className="ion-ios-bookmarks-outline" />
            </div>
            <h4 className="title">
              <a href>Get Estimation</a>
            </h4>
            <p className="description">
              Get estimated cost of your medicine including delivery charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
