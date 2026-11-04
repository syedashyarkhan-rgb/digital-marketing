import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return <h2 className="counter-num">{count}</h2>
}

export default function Counter() {
   const [counter,setCounter]=useState([]);
   
       useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/counter")
          .then(res => { setCounter(res.data.data) })
      }, [])
      const [video,setVideo]=useState([])
       useEffect(() => {
        Axios.get("https://digital-marketing-l4y5.vercel.app/video")
          .then(res => { setVideo(res.data.data) })
      }, [])
  return (
    <>
      <section
        data-stellar-background-ratio="0.3"
        className="counter_feature section-padding"
      >
        <div className="container">

          <div className="row text-center">

           {
            counter.map((item)=>{
              return(
                 <div
              className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="single-project">
                <img src={"assets/img/icon/"+item.icon} alt="Happy Customers" />
                <AnimatedCounter target={item.number} />
                <h4>{item.title}</h4>
              </div>
            </div>
              )
            })
           }

          

          </div>

          <div className="row text-center">
           
              {
                video.map((ans)=>{
                  return(
                   <div
              className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset="0"
            >
                  <div
                className="video_btn"
                style={{
                  backgroundImage: `url(assets/img/bg/${ans.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center"
                }}
              >
                <a
                  className="video-play"
                  href={ans.link}
                >
                  <i className={ans.icon}></i>
                </a>
              </div>
               </div>
                  )
                })
              }
           
          </div>

        </div>
      </section>
    </>
  )
}
