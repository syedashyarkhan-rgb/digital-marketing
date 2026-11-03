import  Axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Popularservice() {
	const [service,setService]=useState([]);
   
       useEffect(() => {
        Axios.get("http://localhost:3000/service")
          .then(res => { setService(res.data.data) })
      }, [])
  return (
    <>
    <section className="service_area section-padding">
			<div className="container">				
				<div className="row text-center">					
					{
						service.map((item)=>{
							return(
								<div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
						<div className="single_service">
							<img src={"assets/img/icon/"+item.src} alt="icon" />
							<h4>{item.title}</h4>
							<p>{item.para}</p>
							<a className="btn_one" href="/email">{item.button}</a>
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
