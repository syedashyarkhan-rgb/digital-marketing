import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

export default function PopularBlogSingleProject() {
  const [bsingleproject,setBsingleproject] = useState([]);
  const [auther,setAuther] = useState([]);
  const [comment,setComment] = useState([]);
  
    useEffect(() => {
      Axios.get("https://digital-marketing-l4y5.vercel.app/singleblog")
        .then(res => { setBsingleproject(res.data.data) })
    }, [])

    useEffect(() => {
      Axios.get("https://digital-marketing-l4y5.vercel.app/auther")
        .then(res => { setAuther(res.data.data) })
    }, [])
    useEffect(() => {
      Axios.get("https://digital-marketing-l4y5.vercel.app/comment")
        .then(res => { setComment(res.data.data) })
    }, [])

  return (
    <>
      <section className="blog-page section-padding">
        <div className="container">	
          <div className="row">

            <div className="col-lg-8 col-sm-12 col-xs-12">

             {
              bsingleproject.map((item)=>{
                return(
                   <div className="post-slide-blog">
                <div className="blog-img bc_bottom">
                  <img
                    src={"assets/img/blog/"+item.src}
                    className="img-fluid"
                    alt="Digital Marketing and Data Privacy"
                  />
                </div>

                <p>
                  {item.para}
                  <br /><br />
                   {item.para1}
                </p>

                <p className="bc_left">
                  {item.para2}
                </p>
              </div>
                )
              })
             }

              <div className="author_part">
                <h3 className="blog_head_title">About the author</h3>

                {
                  auther.map((item)=>{
                    return(
                      <div className="single_author">
                  <img
                    src={"assets/img/blog/"+item.src}
                    alt="Digital Marketing Author"
                  />

                  <h4>{item.title}</h4>

                  <p>
                   {item.para}
                  </p>
                </div>
                    )
                  })
                }
              </div>

              

              <div className="comments_part">
                <h3 className="blog_head_title">Comments</h3>

                {
                  comment.map((item)=>{
                    return(
                      <div className="single_comment">
                  <img
                    src={"assets/img/blog/"+item.src}
                    alt="Blog commenter"
                  />

                  <h4>{item.title}</h4>

                  <p>
                    {item.para}
                  </p>
                </div>
                    )
                  })
                }
              </div>

              <div className="comment_form">
                <h3 className="blog_head_title">Add a Comment</h3>

                <div className="contact comment-box">
                  <form
                    id="contact-form"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="row">

                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="first-name"
                          placeholder="Name"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="first-email"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <textarea
                          rows="6"
                          name="message"
                          className="form-control"
                          id="description"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>

                      <div className="col-md-12">
                        <div className="actions">
                          <button
                            type="submit"
                            value="Send message"
                            name="submit"
                            id="submitButton"
                            className="btn btn-lg btn_one"
                            title="Submit Your Message!"
                          >
                            Submit Comment
                          </button>
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </div>

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
                  title="Digital Marketing Video"
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
