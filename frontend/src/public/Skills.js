import Axios  from 'axios';
import React, { useEffect, useState } from 'react'


export default function Skills() {
   
  const [skills,setSkills]=useState([]);
     
      useEffect(() => {

    Axios.get("https://digital-marketing-l4y5.vercel.app/skills")
        .then(res => {

            setSkills(res.data.data);

            setTimeout(() => {
                setAnimate(true);
            }, 100);

        })
        .catch(err => {
            console.log(err);
        });

}, []);
    const [animate, setAnimate] = useState(false);
   
//      const skills = [
//   {
//     id: 1,
//     name: "Web Design",
//     percent: 85,
//   },
//   {
//     id: 2,
//     name: "Branding",
//     percent: 70,
//   },
//   {
//     id: 3,
//     name: "Mobile App",
//     percent: 60,
//   },
// ];
// 
  return (
   <>
    <section className="skills_area section-padding" style={{ backgroundImage: "url(assets/img/bg/skill-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-8 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                                <div className="skill_bg">
                                    <div className="skill_content">
                                        <h2>Generating New Ideas. Solving Big Problems</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard ever since the when an unknown printer.</p>
                                    </div>
                                    <div className="skill_bar">
                                      
                                        {skills.map((item) => (
  <div key={item._id} className="progress-bar-linear">

    <p className="progress-bar-text">
      {item.name}
      <span>{item.percent}%</span>
    </p>

    <div className="progress-bar">
      <span
        style={{ width: animate ? `${item.percent}%` : "0%",
    transition: "width 5s ease" }}
      ></span>
    </div>

  </div>
))}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
   </>
  )
}
