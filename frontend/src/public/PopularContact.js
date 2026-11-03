import React from 'react'

export default function PopularContact() {
  return (
    <>
     <div id="contact" className="contact_area section-padding">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2 className="section-title-white">Get in touch.</h2>
                            <p className="section-title-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="row">
                            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                                <div className="contact">
                                    <form id="contact-form" method="post" enctype="multipart/form-data">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="email" name="email" className="form-control" placeholder="Email" required="required" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <textarea rows="6" name="message" className="form-control" placeholder="Type your message that on your mind..." required="required"></textarea>
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <button type="submit" value="Send message" name="submit" id="submitButton" className="contact_btn" title="Submit Your Message!">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
