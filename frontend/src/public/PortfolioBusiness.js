import Axios  from 'axios'
import React, { useEffect, useState } from 'react'

export default function PortfolioBusiness() {
	 const [portfolio,setPortfolio]=useState([])
	   useEffect(() => {
			Axios.get("https://digital-marketing-l4y5.vercel.app/portfolio")
			  .then(res => { setPortfolio(res.data.data) })
		  }, [])
  return (
  <>
<section className="portfolio_project_area section-padding">
	<div className="container">
		<div className="row">

			{
				portfolio.map((item)=>{
					return(
						<div className="col-lg-12 col-sm-12 col-xs-12">
				<div className="single_project">
					<img src={"assets/img/portfolio/"+item.src} className="img-fluid" alt="portfolio" />
					<h1>{item.number}</h1>
					<h2>{item.title}</h2>
					<p>
						{item.para}
					</p>
					<a className="btn_one" href="/singleproject">{item.button}</a>
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
