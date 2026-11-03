import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="footer" style={{ backgroundImage: "url(assets/img/bg/footer.png)", backgroundSize: "cover" }}>
                    <div className="container">
                        <div className="row footer_bg">
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="footer_logo">
                                    <img src="assets/img/logo.png" alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p>
                                </div>
                                <div className="social_profile">
                                    <ul>
                                        <li><a href="#" className="f_facebook"><i className="fa fa-facebook" title="Facebook"></i></a></li>
                                        <li><a href="#" className="f_twitter"><i className="fa fa-youtube" title="Twitter"></i></a></li>
                                        <li><a href="#" className="f_instagram"><i className="fa fa-instagram" title="Instagram"></i></a></li>
                                        <li><a href="#" className="f_linkedin"><i className="fa fa-linkedin" title="LinkedIn"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="single_footer">
                                    <h4>Frequently Asked Questions</h4>
                                    <ul>
                                        <li><a href="#">Privacy & Securty</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Communications</a></li>
                                        <li><a href="#">Referral Terms</a></li>
                                        <li><a href="#">Disclaimers</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-1">
                                <div className="single_footer">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href="#">Licenses</a></li>
                                        <li><a href="#">market API</a></li>
                                        <li><a href="#">Careers and job</a></li>
                                        <li><a href="#">Emplois en France</a></li>
                                        <li><a href="#">Jobs in Deutschland	</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="newsletter-form">
                                    <h4>Subscribe for get updates</h4>
                                    <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate">
                                        <div className="input-group input-group-lg newsletter">
                                            <input type="email" name="EMAIL" className="subscribe__input" placeholder="Email Address" />
                                            <button type="submit" className="subs_btn">Subscribe</button>
                                        </div>

                                        <div id="mce-responses">
                                            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="footer_copyright">
                                    <p>&copy; 2026 Monoline. All Rights Reserved by <a href="https://bestwpware.com/" target="_blank">Bestwpware</a></p>
                                    <p>Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
