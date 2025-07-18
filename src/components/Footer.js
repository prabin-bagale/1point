const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>1 Point Pharmacy</h3>
                <p>Medicine at your Door Steps.</p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="ion-ios-arrow-right" />{" "}
                    <a href="#intro">Home</a>
                  </li>
                  <li>
                    <i className="ion-ios-arrow-right" />{" "}
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <i className="ion-ios-arrow-right" />{" "}
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <i className="ion-ios-arrow-right" />{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="ion-ios-arrow-right" />{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Lalitpur 44700
                  <br />
                  Nepal <br />
                  <strong>Phone:</strong> +9779843884337
                  <br />
                  <strong>Email:</strong> onepoint@test.com
                  <br />
                </p>
                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Join us at our{" "}
                  <a href="https://damarugroup.blogspot.com" target="_blank">
                    blog
                  </a>{" "}
                  for insights on interesting topics and such.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
