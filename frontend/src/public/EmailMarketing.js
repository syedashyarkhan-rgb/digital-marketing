import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

export default function EmailMarketing() {
	const [market,setMarket]=useState([]);
	   
		   useEffect(() => {
			Axios.get("http://localhost:3000/market")
			  .then(res => { setMarket(res.data.data) })
		  }, [])
  return (
   <>
   <div className="marketing_list_area section-padding">
			<div className="container">
				<div className="section-title text-center">
					<h2>marketing solutions for what you need</h2>
					<p>Whether you're launching a new product, promoting a seasonal offer, or building long-term customer relationships, our email marketing solutions are designed to help your business grow.</p>
				</div>				
				<div className="row">					
					<div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12">
						<div className="row">
							{
								market.map((item)=>{
									return(
										<div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
								<div className="single_marketing">
									<div className="marketing_icon_img">
										<img src={"assets/img/icon/"+item.src} alt="marketing-icon-image" />
									</div>
									<h3>{item.title}</h3>
									<p>{item.para}</p>
								</div>
							</div>
									)
								})
							}
													
						</div>
					</div>
				</div>				
			</div>
		</div>
   </>
  )
}
