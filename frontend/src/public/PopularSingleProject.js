import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'


export default function PopularSingleProject() {
     const [project,setProject]=useState([])
           useEffect(() => {
                Axios.get("https://digital-marketing-l4y5.vercel.app/singleproject")
                  .then(res => { setProject(res.data.data) })
              }, [])
    return (
        <>
            <section className="single_project_area section-padding">
                <div className="container">
                    
                        {
                            project.map((item)=>{
                                return(
                                    <>
                                    <div className="row project_dec">
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                            <div className="media-left">
                                <img src={"assets/img/portfolio/"+item.src} className="img-fluid" alt="portfolio-image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-xs-12">
                            <div className="project_details">
                                <div className="about_project">
                                    <h4>{item.title}</h4>
                                    <p>
                                        {item.para}
                                    </p>
                                </div>

                                <div className="about_project_details">
                                    <ul>
                                        <li><i className={item.icon}></i><b>{item.client} </b>{item.name} </li>
                                        <li><i className={item.icon2}></i><b>{item.data} </b>{item.number}</li>
                                        <li><i className={item.icon3}></i><b>{item.category} </b><a href="/">{item.limk} </a></li>
                                        <li><i className={item.icon4}></i><b>{item.url} </b><a href="/">{item.link2}</a></li>
                                    </ul>
                                </div>
                                <a className="btn_one" href="/">{item.button}</a>
                            </div>
                        </div>
                        </div>
                                    </>
                                )
                            })
                        }
                    
                   
                </div>
            </section>



        </>
    )
}
