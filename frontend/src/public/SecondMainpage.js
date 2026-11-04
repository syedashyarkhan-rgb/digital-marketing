import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SecondMainpage() {

    const [home2, setHome2] = useState([])

    useEffect(() => {

        Axios.get("https://digital-marketing-l4y5.vercel.app/secondhome")
            .then(res => {
                setHome2(res.data.data)
            })

    }, [])

    return (
        <>

            <div
                id="kenburns_061"
                className="carousel slide ps_indicators_txt_icon ps_control_txt_icon data-bs-target kbrns_zoomInOut thumb_scroll_x swipe_x ps_easeOutQuart"
                data-ride="carousel"
                data-pause="hover"
                data-interval="10000"
                data-duration="2000"
            >

                <div className="carousel-inner" role="listbox">

                    {
                        home2.map((item, index) => {

                            return (

                                <div
                                    // key={item._id}
                                    className={
                                        index === 0
                                            ? "carousel-item active"
                                            : "carousel-item"
                                    }
                                >

                                    {/* Slide Background */}

                                    <img
                                        src={"assets/img/bg/" + item.src}
                                        alt="slider-image"
                                    />


                                    {/* Left Slide Text Layer */}

                                    <div
                                        className="kenburns_061_slide"
                                        data-animation="animated fadeInRight"
                                    >

                                        <h2>
                                           {item.name}
                                        </h2>

                                        <h1>
                                           {item.title}
                                        </h1>

                                        <h3>
                                            {item.para}
                                        </h3>

                                        <a href="/">
                                          {item.button}
                                        </a>

                                    </div>

                                </div>

                            )

                        })
                    }

                </div>


                {/* Previous Button */}

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#kenburns_061"
                    data-bs-slide="prev"
                >

                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>

                    <span className="visually-hidden">
                        Previous
                    </span>

                </button>


                {/* Next Button */}

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#kenburns_061"
                    data-bs-slide="next"
                >

                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>

                    <span className="visually-hidden">
                        Next
                    </span>

                </button>

            </div>

        </>
    )
}