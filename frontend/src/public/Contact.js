import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Header from './Header'
import "./contact.css"


export default function Contact() {
    return (
        <>
            <body data-spy="scroll" data-offset="80">


                {/* <!-- START NAVBAR --> */}
                <Header />
                {/* <!-- END NAVBAR-->							 */}

                {/* <!-- START SECTION TOP --> */}
                <section className="section-top" style={{ backgroundImage: "url(assets/img/bg/section-top.png)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
                                <div className="section-top-title">
                                    <h1>Let's Talk</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- END SECTION TOP --> */}

                {/* <!-- START ADDRESS --> */}
                <section className="address_area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-xs-12 text-center">
                                <div className="single_address">
                                    <h4>New York</h4>
                                    <p className="mr_20">133rd Ave Jamaica, <br /> New York(NY)</p>
                                    <p><a href="tel:415 256 365">+415 256 365</a></p>
                                    <p><a href="mailto:">admin@monoline.com</a></p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xs-12 text-center">
                                <div className="single_address">
                                    <h4>Los Angeles</h4>
                                    <p className="mr_20">E 49th St Los Angeles, <br /> California(CA), 90011</p>
                                    <p><a href="tel:415 256 365">+415 256 365</a></p>
                                    <p><a href="mailto:">support@monoline.com</a></p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xs-12 text-center">
                                <div className="single_address">
                                    <h4>San Francisco</h4>
                                    <p className="mr_20">61 Rudden Ave San <br />Francisco, California</p>
                                    <p><a href="tel:415 256 365">+415 256 365</a></p>
                                    <p><a href="mailto:">info@monoline.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- END ADDRESS --> */}

                {/* <!-- START MAP --> */}
                <div className="map">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.957183635167!2d-74.00402768559431!3d40.71895904512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a1316e7a7%3A0x47bb20eb6074b3f0!2sNew%20Work%20City%20-%20(CLOSED)!5e0!3m2!1sbn!2sbd!4v1600305497356!5m2!1sbn!2sbd"
                        style={{ border: "0" }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                {/* <!-- START MAP -->		 */}
               
<div className="message-section">
  <div className="message-container">
    <div className="message-heading">
      <span className="message-subtitle">GET IN TOUCH</span>
      <h3>Leave a Message</h3>
      <p>Have a question or feedback? Send us a message.</p>
    </div>

    <form
      className="message-form"
      id="messageForm"
      method="post"
    >
      <div className="message-grid">

        <div className="message-field">
          <label htmlFor="visitorName">Your Name</label>
          <input
            type="text"
            name="visitorName"
            id="visitorName"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="message-field">
          <label htmlFor="visitorEmail">Email Address</label>
          <input
            type="email"
            name="visitorEmail"
            id="visitorEmail"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="message-field full-width">
          <label htmlFor="messageSubject">Subject</label>
          <input
            type="text"
            name="messageSubject"
            id="messageSubject"
            placeholder="What is this about?"
            required
          />
        </div>

        <div className="message-field full-width">
          <label htmlFor="visitorMessage">Your Message</label>
          <textarea
            rows="6"
            name="visitorMessage"
            id="visitorMessage"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <div className="message-submit full-width">
          <button type="submit" className="message-btn">
            Send Message <span>→</span>
          </button>
        </div>

      </div>
    </form>
  </div>
</div>


            

                {/* <!-- START PARTNER LOGO --> */}
                <Logo />
                {/* <!-- END PARTNER LOGO --> */}

                {/* <!-- START FOOTER --> */}
                <Footer />
                {/* <!-- END FOOTER --> */}
            </body>
        </>
    )
}
