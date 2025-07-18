import { Link } from 'react-router-dom';

const MidBar = () => {
  return (
    <section id="call-to-action" className="wow fadeIn">
      <div className="container text-center">
        <p>
          Contact us today to inquire about the services we provide and to
          select a plan most applicable to your needs.
        </p>
        <Link to="/orderNow">
          <button
            className="modal-open"
            data-modal="modal1"
            style={{ backgroundColor: "white", color: "#0ac7db" }}
          >
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MidBar;
