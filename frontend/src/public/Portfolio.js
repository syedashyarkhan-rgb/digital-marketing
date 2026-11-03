import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Portfolio() {

    const [filter, setFilter] = useState("all");
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {

        Axios.get("http://localhost:3000/gallaryportfolio")
            .then((res) => {
                console.log(res.data);
                setPortfolio(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);


    const filteredPortfolio = portfolio.filter((item) =>
        filter === "all" || item.category === filter
    );


    return (
        <>
            <section id="portfolio" className="portfolio_area section-padding">

                <div className="container-fluid">

                    <div className="section-title text-center">
                        <h2>Latest Works</h2>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </p>
                    </div>

                    <div className="col-lg-12 text-center">

                        <div className="portfolio_filter">

                            <ul>

                                <li
                                    className={filter === "all" ? "active filter" : "filter"}
                                    onClick={() => setFilter("all")}
                                >
                                    All
                                </li>

                                <li
                                    className={filter === "branding" ? "active filter" : "filter"}
                                    onClick={() => setFilter("branding")}
                                >
                                    Branding
                                </li>

                                <li
                                    className={filter === "webtemplate" ? "active filter" : "filter"}
                                    onClick={() => setFilter("webtemplate")}
                                >
                                    Web Template
                                </li>

                                <li
                                    className={filter === "seo" ? "active filter" : "filter"}
                                    onClick={() => setFilter("seo")}
                                >
                                    SEO
                                </li>

                                <li
                                    className={filter === "digital" ? "active filter" : "filter"}
                                    onClick={() => setFilter("digital")}
                                >
                                    Digital Marketing
                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="portfolio-grid">

                        <div className="row">

                            {filteredPortfolio.map((item) => (

                                <div
                                    key={item._id}
                                    className="col-lg-4 col-sm-6 col-xs-12"
                                >

                                    <div className="single-gallery">

                                        <img
                                            src={`/assets/img/portfolio/${item.img}`}
                                            className="img-fluid"
                                            alt="gallery"
                                        />

                                        <a
                                            href={`/assets/img/portfolio/${item.img}`}
                                            className="gallery_enlarge_icon"
                                        >
                                            <i className="ti-eye"></i>
                                        </a>

                                        <h4>
                                            <a href="#!">
                                                {item.title}
                                            </a>
                                        </h4>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
