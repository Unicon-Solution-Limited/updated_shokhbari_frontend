import React, { useRef, useState } from "react";
import AllFooter from "../../../Shared/Footer/AllFooter";
import AllHeader from "../../../Shared/Header/AllHeader";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [message, setMessage] = useState(false);
  const contactForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "shokhBari",
        "template_j6ipfgs",
        contactForm.current,
        "DLlM_qc3xdPzTakI-"
      )
      .then(
        (result) => {
          if (result) {
            setMessage("We received your message successfully!");
            setTimeout(() => {
              setMessage("");
            }, 3000);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <AllHeader />
      <main className="container contact_us_main">
        <section className="contactUs">
          <h3 className="mb-3">Contact Us:</h3>
          <span className="contactContent">
            <span>Can't find the answer you are looking for?</span>
            <p>
              Shokhbari, your friendly messenger chat assistant is here to
              assist you 24 hours a day. Phone call is available everyday from
              10:00 AM – 10:00 PM. Hotline: +880 18414-77361
            </p>
          </span>
        </section>

        <div className="row contact_bottom_section mb-5">
          <section className="col-12 col-md-6">
            <form
              className="row contact_form"
              ref={contactForm}
              onSubmit={sendEmail}
            >
              <div className="col-12 mb-3">
                <label htmlFor="inputName" className="form-label mb-0">
                  Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="inputEmail" className="form-label mb-0">
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="inputPhone" className="form-label mb-0">
                  Contact No. *
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="inputPhone"
                  name="ContactNo"
                  placeholder="+88"
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="inputMessage" className="form-label mb-0">
                  Message *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMessage"
                  placeholder="Ex. I want to know ......."
                  name="message"
                  required
                />
              </div>

              <div className="col-12 mt-3">
                <button type="submit" className="btn myBtn">
                  Send Message
                </button>
              </div>
            </form>
          </section>
          <section className="col-12 col-md-6 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.0608683543825!2d90.3895130695394!3d23.73869562630286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c762aa8c59%3A0xd9d5fdfde912551f!2sUnicon%20Solution%20Ltd.!5e0!3m2!1sbn!2sbd!4v1686744687695!5m2!1sbn!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
              className="form-control map_frame"
            ></iframe>
          </section>
        </div>

        {message && (
          <div
            className="alert d-flex align-items-center mt-5 contact_alert"
            role="alert"
          >
            <i className="bi bi-check2-circle"></i>
            <div>{message}</div>
          </div>
        )}
      </main>
      <AllFooter />
    </>
  );
};

export default ContactUs;
