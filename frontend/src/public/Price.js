import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

export default function Price() {
	const [price,setPrice]=useState([]);
	   
		   useEffect(() => {
			Axios.get("http://localhost:3000/price")
			  .then(res => { setPrice(res.data.data) })
		  }, [])
  return (
   <>
  <div className="pricing-table-area section-padding" style={{backgroundImage: "url(assets/img/bg/pricing-bg.jpg)", backgroundSize:"cover", backgroundPosition:"center"}}>
			<div className="container">										
				<div className="section-title text-center">
					<h2 className="section-title-white">Pricing Plan</h2>
					<p className="section-title-white">Choose the right plan for your business and get professional digital solutions designed to help your brand grow online.</p>
				</div>				
				<div className="row">
					{
						price.map((item)=>{
							return(
								<div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="pricingTable blue">
							<div className="pricingTable-header">
								<div className="price-value">
									<span className="currency">{item.dollar}</span>
									<span className="amount">{item.number}</span>
									<span className="duration">{item.month}</span>
								</div>
							</div>
							<div className="pricing-content">
								<h3 className="title">{item.title}</h3>
								<ul>
									<li>{item.heading1}</li>
									<li>{item.heading2}</li>
									<li>{item.heading3}</li>
									<li>{item.heading4}</li>
									<li>{item.heading5}</li>
								</ul>
							</div>
							<div className="pricingTable-signup">
								<a href="/contact">{item.button}</a>
							</div>
						</div>
					</div>
							)
						})
					}

					
				</div>
			</div>
            </div>
   </>
  )
}