const ContactUs = () => {
  return (
    <section id="contact" className="section-bg wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h3>Contact Us</h3>
          <p>
            Contact us with the details below or send us a message about any
            queries you might have so we can answer them ASAP.
          </p>
        </div>
        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline" />
              <h3>Address</h3>
              <address>Lalitpur 44700, Nepal</address>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline" />
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+9779843884337">+9779843884337</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline" />
              <h3>Email</h3>
              <p>
                <a href="mailto:gsl@company.com">onepoint@test.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
