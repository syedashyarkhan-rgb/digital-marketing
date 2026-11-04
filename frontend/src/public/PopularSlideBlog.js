import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

export default function PopularSlideBlog() {
	const [slidebar, setSlidebar] = useState([]);

	useEffect(() => {
		Axios.get("https://digital-marketing-l4y5.vercel.app/blogslidebar")
			.then(res => { setSlidebar(res.data.data) })
	}, [])
	return (
		<>

			<section className="blog-page section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-sm-12 col-xs-12">
                           {
							slidebar.map((item)=>{
								return(
									
							<div className="home_single_blog">
								<img src={"assets/img/blog/"+item.src} className="img-fluid" alt="Digital Marketing and Data Privacy" />
								<div className="home_blog_content">
									<div className="blog_title_info">
										<h2>
											<a href="blog_single.html">
												{item.heading}
											</a>
										</h2>
										<span>{item.number} </span>
										<span><a href="/blogsingleproject">{item.link} </a></span>
									</div>
									<p>
										{item.para}
									</p>
									<a className="home_b_btn" href="/blogsingleproject">{item.button} </a>
								</div>
							</div>
								)
							})
						   }

						</div>

						<div className="col-lg-4 col-sm-12 col-xs-12">

							<div className="blog_search">
								<input
									type="text"
									className="form-control"
									placeholder="Type & Press Enter"
								/>
							</div>

							<div className="latest_blog wow fadeInRight">
								<h4 className="blog_sidebar_title">Latest Blog</h4>

								<div className="single_latest_blog">
									<a href="/">
										<h4>
											How Data-Driven Strategies Can Improve Business Performance.
										</h4>
									</a>
								</div>

								<div className="single_latest_blog">
									<a href="/">
										<h4>
											The Importance of a Strong Online Presence for Modern Businesses.
										</h4>
									</a>
								</div>

								<div className="single_latest_blog">
									<a href="/">
										<h4>
											How Effective Digital Marketing Can Help Businesses Reach New Customers.
										</h4>
									</a>
								</div>
							</div>

							<div className="categories">
								<h4 className="blog_sidebar_title">Categories</h4>
								<ul>
									<li>
										<a href="/">
											<i className="ti-arrow-right"></i> Digital Marketing
										</a>
									</li>
									<li>
										<a href="/">
											<i className="ti-arrow-right"></i> Business
										</a>
									</li>
									<li>
										<a href="/">
											<i className="ti-arrow-right"></i> Technology
										</a>
									</li>
									<li>
										<a href="/">
											<i className="ti-arrow-right"></i> Web Development
										</a>
									</li>
									<li>
										<a href="/">
											<i className="ti-arrow-right"></i> Branding
										</a>
									</li>
									<li>
										<a href="/">
											<i className="ti-arrow-right"></i> SEO
										</a>
									</li>
								</ul>
							</div>

							<div className="video_post wow fadeInRight">
								<h4 className="blog_sidebar_title">Video Widget</h4>
								<iframe
									src="https://player.vimeo.com/video/62026718"
									title="Digital Business Video"
								></iframe>
							</div>

							<div className="tag">
								<h4 className="blog_sidebar_title">Tag cloud</h4>
								<a href="/">Digital Marketing</a>
								<a href="/">Development</a>
								<a href="/">SEO</a>
								<a href="/">Business</a>
								<a href="/">Technology</a>
								<a href="/">Branding</a>
								<a href="/">Online Growth</a>
								<a href="/">Digital Strategy</a>
							</div>

							<div className="banner">
								<a href="/">
									<img
										src="assets/img/blog/banner_3.jpg"
										className="img-fluid"
										alt="Digital Business Banner"
									/>
								</a>
							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	)
}
