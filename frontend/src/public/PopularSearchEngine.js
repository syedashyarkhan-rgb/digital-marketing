import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function PopularSearchEngine() {
    const [Searchengine, setSerachengine] = useState([]);

    useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/searchengine")
            .then(res => { setSerachengine(res.data.data) })
    }, [])
    return (
        <>

            <section className="marketing_area section-padding">
                <div className="container">
                    <div className="row">

                        {
                            Searchengine.map((item) => {
                                return (
                                    <>
                                        <div className="col-lg-5 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                                            <div className="marketing_content">
                                                <h2>{item.title}</h2>
                                                <img src={"assets/img/" + item.src} className="img-fluid" alt="Search Engine Optimization" />
                                            </div>
                                        </div>

                                        <div className="col-lg-7 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                                            <div className="marketing_text">

                                                <p>
                                                    {item.para}
                                                </p>

                                                <p>
                                                    {item.para1}
                                                </p>

                                                <p>
                                                    {item.para2}
                                                </p>

                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
            ```

        </>
    )
}
