var express = require('express');

var cors = require("cors");


var fileUpload = require("express-fileupload");
var path = require("path");

var mongoose = require("mongoose");
const { url } = require('inspector');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/verifyToken");
const isAdmin = require("./middleware/isAdmin");
const crypto = require("crypto");
require("dotenv").config();
const nodemailer = require("nodemailer");

// mongoose.connect(process.env.MONGO_URI)

//   .then((res) => console.log("Connected to DB"))
//   .catch((err) => console.log(err));

mongoose.connect("mongodb+srv://coding:ashyar12@cprogramming.aipe0wu.mongodb.net/webcourse?retryWrites=true&w=majority")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
transporter.verify((error, success) => { if (error) { console.log("EMAIL ERROR:", error); } else { console.log("EMAIL SERVER READY:", success); } });








var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());


// /////////////////////////////////api add /////////////////////////////////////
/////////////////////////////////////home  main page //////////////////////////////
const HomeSchema = new mongoose.Schema({
  src: String,
  title: String,
  para: String,
  button: String

}, { collection: "home" });

const Home = mongoose.model("home", HomeSchema);


app.post("/addhome",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;
  var button = req.body.button;



  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "bg", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new Home({ src: pic, title: title, para: para, button: button });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});
//////////////////////////////////add feature //////////////////////////////
const FeatureSchema = new mongoose.Schema({
  icon: String,
  title: String,
  para: String


}, { collection: "feature" });

const Feature = mongoose.model("feature", FeatureSchema);


app.post("/addfeature",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "icon", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new Feature({ icon: pic, title: title, para: para });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});
/////////////////////////////////////add counter ////////////////////////////////
const CunterSchema = new mongoose.Schema({
  icon: String,
  number: String,
  title: String


}, { collection: "counter" });

const Counter = mongoose.model("counter", CunterSchema);


app.post("/addcounter",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.icon;
  var pic = targetpic.name;
  var number = req.body.number;
  var title = req.body.title;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "icon", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new Counter({ icon: pic, number: number, title: title });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

///////////////////////////////////////Add video ///////////////////////////
const VideoSchema = new mongoose.Schema({
  src: String,
  link: String,
  icon: String


}, { collection: "video" });

const Video = mongoose.model("video", VideoSchema);


app.post("/addvideo",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var link = req.body.link;
  var icon = req.body.icon;



  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "bg", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new Video({ src: pic, link: link, icon: icon });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});
/////////////////////////////////////add choose ///////////////////////////
const ChooseSchema = new mongoose.Schema({
  h1: String,
  h2: String,
  h3: String,
  para: String,
  button: String,
  src: String


}, { collection: "choose" });

const Choose = mongoose.model("choose", ChooseSchema);


app.post("/addchoose",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var h1 = req.body.h1;
  var h2 = req.body.h2;
  var h3 = req.body.h3;
  var para = req.body.para;
  var button = req.body.button;

  var targetpic = req.files.pic;
  var pic = targetpic.name;



  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new Choose({ h1: h1, h2: h2, h3: h3, para: para, button: button, src: pic });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

//////////////////////////// add gallery Portfolio ///////////////////////////////////
const GalleryPortfolioSchema = new mongoose.Schema({
  category: String,
  img: String,
  title: String,



}, { collection: "galleryportfolio" });

const GalleryPortfolio = mongoose.model("galleryportfolio", GalleryPortfolioSchema);


app.post("/addgalleryportfolio",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var category = req.body.category;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "portfolio", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new GalleryPortfolio({ category: category, img: pic, title: title });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});


////////////////////////////////////////////////add skills //////////////////////////////////////
const SkillsSchema = new mongoose.Schema({
  name: String,
  percent: Number



}, { collection: "skills" });

const Skills = mongoose.model("skills", SkillsSchema);


app.post("/addskills",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var name = req.body.name;
  var percent = req.body.percent;





  const user = new Skills({ name: name, percent: percent });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});


/////////////////////////////////add promation //////////////////////
const PromationSchema = new mongoose.Schema({
  src: String,
  para: String



}, { collection: "promation" });

const Promation = mongoose.model("promation", PromationSchema);


app.post("/addpromation",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })



  const user = new Promation({ src: pic, para: para });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

////////////////////////////////add testimional //////////////////////
const TestimonialsSchema = new mongoose.Schema({
  src: String,
  para: String,
  name: String,
  title: String,

}, { collection: "Testimonials" });

const Testimonials = mongoose.model("Testimonials", TestimonialsSchema);


app.post("/addtestimonials",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var name = req.body.name;
  var title = req.body.title;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "testimonial", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })



  const user = new Testimonials({ src: pic, para: para, name: name, title: title });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

////////////////////////////////add blog ////////////////////////////////
const BlogSchema = new mongoose.Schema({
  src: String,
  company: String,
  number: String,
  name: String,
  para: String,
  button: String

}, { collection: "blog" });

const Blog = mongoose.model("blog", BlogSchema);


app.post("/addblog",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var company = req.body.company;
  var number = req.body.number;
  var name = req.body.name;
  var para = req.body.para;
  var button = req.body.button;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })



  const user = new Blog({ src: pic, company: company, number: number, name: name, para: para, button: button });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

///////////////////////////////////// add second home///////////////////////////////////
const SecondhomeSchema = new mongoose.Schema({
  src: String,
  name: String,
  title: String,
  para: String,
  button: String

}, { collection: "secondhome" });

const SecondHome = mongoose.model("secondhome", SecondhomeSchema);


app.post("/addhome2",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var name = req.body.name;
  var title = req.body.title;
  var para = req.body.para;
  var button = req.body.button;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "bg", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })



  const user = new SecondHome({ src: pic, name: name, title: title, para: para, button: button });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});
//////////////////////////////////////////////////////////////////
//////////////////////////////////add about ///////////////////////////
const AboutSchema = new mongoose.Schema({
  title: String,
  heading: String,
  para: String


}, { collection: "about" });

const About = mongoose.model("about", AboutSchema);


app.post("/addabout",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var title = req.body.title;
  var heading = req.body.heading;
  var para = req.body.para;



  const user = new About({ title: title, heading: heading, para: para });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

///////////////////////////////////////add team ///////////////////////////////////
const TeamSchema = new mongoose.Schema({
  src: String,
  name: String,
  title: String,
  icon: String,
  icon2: String

}, { collection: "team" });

const Team = mongoose.model("team", TeamSchema);


app.post("/addteam",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var name = req.body.name;
  var title = req.body.title;
  var icon = req.body.icon;
  var icon2 = req.body.icon2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "team", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })



  const user = new Team({ src: pic, name: name, title: title, icon: icon, icon2: icon2 });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

////////////////////////////////////add service .///////////////////////////////
const ServiceSchema = new mongoose.Schema({
  src: String,
  title: String,
  para: String,
  button: String


}, { collection: "service" });

const Service = mongoose.model("service", ServiceSchema);


app.post("/addservice",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;
  var button = req.body.button;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "icon", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })



  const user = new Service({ src: pic, title: title, para: para, button: button });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

//////////////////////////////////////add price /////////////////////////////////////
const PriceSchema = new mongoose.Schema({
  dollar: String,
  number: String,
  month: String,
  title: String,
  heading1: String,
  heading2: String,
  heading3: String,
  heading4: String,
  heading5: String,
  button: String


}, { collection: "price" });

const Price = mongoose.model("price", PriceSchema);


app.post("/addprice",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var dollar = req.body.dollar;
  var number = req.body.number;
  var month = req.body.month;
  var title = req.body.title;
  var heading1 = req.body.heading1;
  var heading2 = req.body.heading2;
  var heading3 = req.body.heading3;
  var heading4 = req.body.heading4;
  var heading5 = req.body.heading5;
  var button = req.body.button;


  const user = new Price({ dollar: dollar, number: number, month: month, title: title, heading1: heading1, heading2: heading2, heading3: heading3, heading4: heading4, heading5: heading5, button: button });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

////////////////////////////////////add email ///////////////////////////////////
const EmailSchema = new mongoose.Schema({
  title: String,
  src: String,
  para: String,
  para1: String,
  para2: String



}, { collection: "email" });

const Email = mongoose.model("email", EmailSchema);


app.post("/addemail",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new Email({ title: title, src: pic, para: para, para1: para1, para2: para2 });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

/////////////////////////////////////////////add seo //////////////////////////
const SeoSchema = new mongoose.Schema({
  title: String,
  src: String,
  para: String,
  para1: String,
  para2: String



}, { collection: "seo" });

const Seo = mongoose.model("seo", SeoSchema);


app.post("/addseo",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new Seo({ title: title, src: pic, para: para, para1: para1, para2: para2 });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

////////////////////////////////////////add social media //////////////////////
const SocialMediaSchema = new mongoose.Schema({
  title: String,
  src: String,
  para: String,
  para1: String,
  para2: String



}, { collection: "socialmedia" });

const SocialMedia = mongoose.model("socialmedia", SocialMediaSchema);


app.post("/addsocialmedia",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new SocialMedia({ title: title, src: pic, para: para, para1: para1, para2: para2 });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

////////////////////////////////////////add lead generation ///////////////////////
const LeadGenerationSchema = new mongoose.Schema({
  title: String,
  src: String,
  para: String,
  para1: String,
  para2: String



}, { collection: "leadgeneration" });

const LeadGeneration = mongoose.model("leadgeneration", LeadGenerationSchema);


app.post("/addleadgeneration",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new LeadGeneration({ title: title, src: pic, para: para, para1: para1, para2: para2 });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

/////////////////////////////////////add webdesign///////////////////////////
const WebDesignSchema = new mongoose.Schema({
  title: String,
  src: String,
  para: String,
  para1: String,
  para2: String



}, { collection: "webdesign" });

const WebDesign = mongoose.model("webdesign", WebDesignSchema);


app.post("/addwebdesign",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new WebDesign({ title: title, src: pic, para: para, para1: para1, para2: para2 });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

////////////////////////////////////// add search engine ///////////////////////
const SearchEngineSchema = new mongoose.Schema({
  title: String,
  src: String,
  para: String,
  para1: String,
  para2: String



}, { collection: "searchengine" });

const SearchEngine = mongoose.model("searchengine", SearchEngineSchema);


app.post("/addsearchengine",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new SearchEngine({ title: title, src: pic, para: para, para1: para1, para2: para2 });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});


///////////////////////////////////////marketing ///////////////////////////
const MarketingSchema = new mongoose.Schema({
  src: String,
  title: String,
  para: String

}, { collection: "marketing" });

const Marketing = mongoose.model("marketing", MarketingSchema);


app.post("/addmarketing", verifyToken, isAdmin,(req, res) => {
  // console.log(req.body);
  console.log("Itls Working");


  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "icon", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new Marketing({ src: pic, title: title, para: para });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

///////////////////////////////////////////// add case study ////////////////////////////
const CaseStudySchema = new mongoose.Schema({

  title: String,
  para: String,
  para1: String,
  src: String

}, { collection: "casestudy" });

const CaseStudy = mongoose.model("casestudy", CaseStudySchema);


app.post("/addcasestudy",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");



  var title = req.body.title;
  var para = req.body.para;
  var para1 = req.body.para1;
  var targetpic = req.files.pic;
  var pic = targetpic.name;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const user = new CaseStudy({ title: title, para: para, para1: para1, src: pic });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

/////////////////////////////////////casestudycontent//////////////////////////
const StudyContentSchema = new mongoose.Schema({

  title: String,
  para: String


}, { collection: "casecontent" });

const CaseContent = mongoose.model("casecontent", StudyContentSchema);


app.post("/addcasecontent",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var title = req.body.title;
  var para = req.body.para;

  const user = new CaseContent({ title: title, para: para });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

/////////////////////////////////////////////add Portfolio //////////////////////////
const PortfolioSchema = new mongoose.Schema({
  src: String,
  number: String,
  title: String,
  para: String,
  button: String


}, { collection: "portfolio" });

const Portfolio = mongoose.model("portfolio", PortfolioSchema);


app.post("/addPortfolio",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var number = req.body.number;
  var title = req.body.title;
  var para = req.body.para;
  var button = req.body.button;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "portfolio", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const user = new Portfolio({ src: pic, number: number, title: title, para: para, button: button });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

////////////////////////////////////add single project /////////////////////////////
const SingleProjectSchema = new mongoose.Schema({
  src: String,
  title: String,
  para: String,
  icon: String,
  client: String,
  name: String,
  icon2: String,
  data: String,
  number: String,
  icon3: String,
  category: String,
  link: String,
  icon4: String,
  url: String,
  link2: String,
  button: String


}, { collection: "singleproject" });

const SingleProject = mongoose.model("singleproject", SingleProjectSchema);


app.post("/addsingleproject",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;
  var icon = req.body.icon;
  var client = req.body.client;
  var name = req.body.name;
  var icon2 = req.body.icon2;
  var data = req.body.data;
  var number = req.body.number;
  var icon3 = req.body.icon3;
  var category = req.body.category;
  var link = req.body.link;
  var icon4 = req.body.icon4;
  var url = req.body.url;
  var link2 = req.body.link2;
  var button = req.body.button;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "portfolio", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const user = new SingleProject({ src: pic, title: title, para: para, icon: icon, client: client, name: name, icon2: icon2, data: data, number: number, icon3: icon3, category: category, link: link, icon4: icon4, url: url, link2: link2, button: button });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

///////////////////////////////////// add blogslidebar ////////////////////////////
const BlogslidebarSchema = new mongoose.Schema({
  src: String,
  heading: String,
  number: String,
  link: String,
  para: String,
  button: String


}, { collection: "blogslidebar" });

const BlogSlideBar = mongoose.model("blogslidebar", BlogslidebarSchema);


app.post("/addblogslidebar",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var heading = req.body.heading;
  var number = req.body.number;
  var link = req.body.link;
  var para = req.body.para;
  var button = req.body.button;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const user = new BlogSlideBar({ src: pic, heading: heading, number: number, link: link, para: para, button: button });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

/////////////////////////////////////////single blog///////////////////////////
const SingleBlogSchema = new mongoose.Schema({
  src: String,
  para: String,
  para1: String,
  para2: String



}, { collection: "singleblog" });

const SingleBlog = mongoose.model("singleblog", SingleBlogSchema);


app.post("/addsingleblog",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const user = new SingleBlog({ src: pic, para: para, para1: para1, para2: para2 });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

///////////////////////////////////add auther //////////////////////////////////
const AutherSchema = new mongoose.Schema({
  src: String,
  title: String,
  para: String




}, { collection: "auther" });

const Auther = mongoose.model("auther", AutherSchema);


app.post("/addauther",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const user = new Auther({ src: pic, title: title, para: para });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

///////////////////////////////////add comment .............../////////////////
const CommentSchema = new mongoose.Schema({
  src: String,
  title: String,
  para: String




}, { collection: "comment" });

const Comment = mongoose.model("comment", CommentSchema);


app.post("/addcomment",verifyToken, isAdmin, (req, res) => {
  // console.log(req.body);
  console.log("Itls Working");

  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const user = new Comment({ src: pic, title: title, para: para });

  user.save()
    .then(() => {
      res.json({ message: "Job added successfully to the database" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });


});

///////////////////////////////get api .////////////////////////////

//////////////////////////////////homemainpage //////////////////////////////
app.get("/home", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allHome = await Home.find({});
  res.send({ status: "OK", data: allHome });

});

////////////////////////////////delete ///////////////////////////
app.delete("/delhome/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Home.deleteOne({ _id: id })
});

////////////////////////////////////update //////////////////////////
app.get("/singlehome/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleHome = await Home.findOne({ _id })

  console.log("Edit Page" + singleHome);
  res.send(singleHome);

});

app.post("/uhome",verifyToken, isAdmin, async (req, res) => {


  var _id = req.body.id;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;
  var button = req.body.button;



  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "bg", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const updatedUser = await Home.findByIdAndUpdate(
    _id,
    { src: pic, title: title, para: para, button: button },
    {
      new: true,          // Crucial: returns the freshly updated document
      runValidators: true // Ensures the data adheres to your Mongoose schema rules
    }
  );

  // res.send({status: "OK",data:singleHero});
});

/////////////////////////////////////////end ////////////////////////////////////////////////////////


//////////////////////////////feature ///////////////////////////
app.get("/feature", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allFeature = await Feature.find({});
  res.send({ status: "OK", data: allFeature });

});

/////////////////////////////delete ////////////////////////////////
app.delete("/delfeature/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Feature.deleteOne({ _id: id })
});

/////////////////////////////////////////updata ////////////////////////////////
app.get("/singlefeature/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleFeature = await Feature.findOne({ _id })

  console.log("Edit Page" + singleFeature);
  res.send(singleFeature);

});

app.post("/ufeature",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "icon", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const updatedUser = await Feature.findByIdAndUpdate(
    _id,
    { icon: pic, title: title, para: para},
    {
      new: true,
      runValidators: true
    }
  );


});


////////////////////counter ////////////////////////
app.get("/counter", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allCounter = await Counter.find({});
  res.send({ status: "OK", data: allCounter });

});

//////////////////////////////delete /////////////////////////////
app.delete("/delcounter/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Counter.deleteOne({ _id: id })
});

/////////////////////////////////update /////////////////////////////
app.get("/singlecounter/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleCounter = await Counter.findOne({ _id })

  console.log("Edit Page" + singleCounter);
  res.send(singleCounter);

});

app.post("/ucounter",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var targetpic = req.files.icon;
  var pic = targetpic.name;
  var number = req.body.number;
  var title = req.body.title;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "icon", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const updatedUser = await Counter.findByIdAndUpdate(
    _id,
    { icon: pic, number: number, title: title},
    {
      new: true,
      runValidators: true
    }
  );


});



////////////////////////////video ////////////////////////////////
app.get("/video", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allVideo = await Video.find({});
  res.send({ status: "OK", data: allVideo });

});
//////////////////////////////delete //////////////////////////////
app.delete("/delvideo/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Video.deleteOne({ _id: id })
});

///////////////////////////////////////update ////////////////////////////

app.get("/singlevideo/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleVideo = await Video.findOne({ _id })

  console.log("Edit Page" + singleVideo);
  res.send(singleVideo);

});

app.post("/uvideo",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var targetpic = req.files.pic;
  var pic = targetpic.name;
  var link = req.body.link;
  var icon = req.body.icon;



  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "bg", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

   


  const updatedUser = await Video.findByIdAndUpdate(
    _id,
    { src: pic, link: link, icon: icon},
    {
      new: true,
      runValidators: true
    }
  );


});



/////////////////////////choose us ////////////////////////////////
app.get("/chooseus", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allChoose = await Choose.find({});
  res.send({ status: "OK", data: allChoose });

});

///////////////////////////////delete //////////////////////////////
app.delete("/delchoose/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Choose.deleteOne({ _id: id })
});

/////////////////////////////////////update /////////////////////////////////
app.get("/singlechoose/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleChoose = await Choose.findOne({ _id })

  console.log("Edit Page" + singleChoose);
  res.send(singleChoose);

});


app.post("/uchoose",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
    var h1 = req.body.h1;
  var h2 = req.body.h2;
  var h3 = req.body.h3;
  var para = req.body.para;
  var button = req.body.button;

  var targetpic = req.files.pic;
  var pic = targetpic.name;



  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const updatedUser = await Choose.findByIdAndUpdate(
    _id,
    { h1: h1, h2: h2, h3: h3,para:para,button:button,src:pic},
    {
      new: true,
      runValidators: true
    }
  );


});




////////////////////////////////gallery portfolio //////////////////////
app.get("/gallaryportfolio", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allGalleryPortfolio = await GalleryPortfolio.find({});
  res.send({ status: "OK", data: allGalleryPortfolio });

});

/////////////////////////////////////////delete ///////////////////////////
app.delete("/delgallaryportfolio/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await GalleryPortfolio.deleteOne({ _id: id })
});


/////////////////////////////////////update //////////////////////////////////
app.get("/singlegalleryportfolio/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleGalleryPortfolio = await GalleryPortfolio.findOne({ _id })

  console.log("Edit Page" + singleGalleryPortfolio);
  res.send(singleGalleryPortfolio);

});

app.post("/ugalleryportfolio",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var category = req.body.category;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "portfolio", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const updatedUser = await GalleryPortfolio.findByIdAndUpdate(
    _id,
    { category: category, src: pic, title: title},
    {
      new: true,
      runValidators: true
    }
  );


});

////////////////////////////skills //////////////////////
app.get("/skills", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allSkills = await Skills.find({});
  res.send({ status: "OK", data: allSkills });

});
///////////////////////////////delete ////////////////////////
app.delete("/delskills/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Skills.deleteOne({ _id: id })
});

//////////////////////////////////update ///////////////////////////////
app.get("/singleskills/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleSkills = await Skills.findOne({ _id })

  console.log("Edit Page" + singleSkills);
  res.send(singleSkills);

});

app.post("/uskills",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var name = req.body.name;
  var percent = req.body.percent;



  const updatedUser = await Skills.findByIdAndUpdate(
    _id,
    { name: name, percent: percent},
    {
      new: true,
      runValidators: true
    }
  );


});


/////////////////////////////promation ///////////////////////
app.get("/promation", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allPromation = await Promation.find({});
  res.send({ status: "OK", data: allPromation });

});

//////////////////////////delete ////////////////////////////////
app.delete("/delpromation/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Promation.deleteOne({ _id: id })
});

////////////////////////////////update ////////////////////////////////
app.get("/singlepromation/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singlePromation = await Promation.findOne({ _id })

  console.log("Edit Page" + singlePromation);
  res.send(singlePromation);

});

app.post("/upromation",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const updatedUser = await Promation.findByIdAndUpdate(
    _id,
    { src: pic, para: para},
    {
      new: true,
      runValidators: true
    }
  );


});


/////////////////////////testimonial /////////////////////////////
app.get("/testimonials", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allTestimonials = await Testimonials.find({});
  res.send({ status: "OK", data: allTestimonials });

});

////////////////////////////////delete ////////////////////////////
app.delete("/deltestimonials/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Testimonials.deleteOne({ _id: id })
});

////////////////////////////////update //////////////////////////////
app.get("/singletestimonials/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleTestimonials = await Testimonials.findOne({ _id })

  console.log("Edit Page" + singleTestimonials);
  res.send(singleTestimonials);

});

app.post("/utestimonials",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var name = req.body.name;
  var title = req.body.title;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "testimonial", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const updatedUser = await Testimonials.findByIdAndUpdate(
    _id,
    { src: pic, para: para,name:name,title:title},
    {
      new: true,
      runValidators: true
    }
  );


});



/////////////////////////////blog /////////////////////
app.get("/blog", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allBlog = await Blog.find({}).limit(3);
  res.send({ status: "OK", data: allBlog });

});

app.get("/allblog", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allBlog = await Blog.find({});
  res.send({ status: "OK", data: allBlog });

});

///////////////////////////////delete //////////////////////////
app.delete("/delblog/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Blog.deleteOne({ _id: id })
});

////////////////////////////////update /////////////////////////////
app.get("/singleblog/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleBlog = await Blog.findOne({ _id })

  console.log("Edit Page" + singleBlog);
  res.send(singleBlog);

});

app.post("/ublog",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var company = req.body.company;
  var number = req.body.number;
  var name = req.body.name;
  var para = req.body.para;
  var button = req.body.button;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const updatedUser = await Blog.findByIdAndUpdate(
    _id,
    { src: pic, company: company,number:number,name:name,para:para,button:button},
    {
      new: true,
      runValidators: true
    }
  );


});




//////////////////////////second main page ///////////////////
app.get("/secondhome", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allSecondhome = await SecondHome.find({});
  res.send({ status: "OK", data: allSecondhome });

});

/////////////////////////////////delete /////////////////////////
app.delete("/delsecondhome/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await SecondHome.deleteOne({ _id: id })
});

/////////////////////////////////update //////////////////////////
app.get("/singlesechome/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleSecondHome = await SecondHome.findOne({ _id })

  console.log("Edit Page" + singleSecondHome);
  res.send(singleSecondHome);

});

app.post("/ushome",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var targetpic = req.files.pic;
  var pic = targetpic.name;
  var name = req.body.name;
  var title = req.body.title;
  var para = req.body.para;
  var button = req.body.button;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "bg", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const updatedUser = await SecondHome.findByIdAndUpdate(
    _id,
    { src: pic, name: name,title:title,para:para,button:button},
    {
      new: true,
      runValidators: true
    }
  );


});



/////////////////////////////////////about ////////////////////////
app.get("/about", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allAbout = await About.find({});
  res.send({ status: "OK", data: allAbout });

});

//////////////////////////////////delete //////////////////////////
app.delete("/delabout/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await About.deleteOne({ _id: id })
});

//////////////////////////////////update .//////////////////////////////
app.get("/singleabout/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleabout = await About.findOne({ _id })

  console.log("Edit Page" + singleabout);
  res.send(singleabout);

});

app.post("/uabout",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   
  var title = req.body.title;
  var heading = req.body.heading;
  var para = req.body.para;

  const updatedUser = await About.findByIdAndUpdate(
    _id,
    { title: title, heading: heading,para:para},
    {
      new: true,
      runValidators: true
    }
  );


});

/////////////////////////////team /////////////////////////////////
app.get("/team", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allTeam = await Team.find({}).limit(4);
  res.send({ status: "OK", data: allTeam });

});

app.get("/allteam", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allTeam = await Team.find({});
  res.send({ status: "OK", data: allTeam });

});

/////////////////////////////delete //////////////////////////////////
app.delete("/delteam/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Team.deleteOne({ _id: id })
});

/////////////////////////////////////update //////////////////////////////
app.get("/singleteam/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleTeam = await Team.findOne({ _id })

  console.log("Edit Page" + singleTeam);
  res.send(singleTeam);

});

app.post("/uteam",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
  
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var name = req.body.name;
  var title = req.body.title;
  var icon = req.body.icon;
  var icon2 = req.body.icon2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "team", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })


  const updatedUser = await Team.findByIdAndUpdate(
    _id,
    { src: pic, name: name,title:title,icon:icon,icon2:icon2},
    {
      new: true,
      runValidators: true
    }
  );


});

//////////////////////////////////service //////////////////////////////////
app.get("/service", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allService = await Service.find({});
  res.send({ status: "OK", data: allService });

});

////////////////////////////////delete /////////////////////////////////////
app.delete("/delservice/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Service.deleteOne({ _id: id })
});

//////////////////////////////////update ////////////////////////////////////
app.get("/singleservice/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleService = await Service.findOne({ _id })

  console.log("Edit Page" + singleService);
  res.send(singleService);

});

app.post("/uservice",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
  
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;
  var button = req.body.button;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "icon", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })



  const updatedUser = await Service.findByIdAndUpdate(
    _id,
    { src: pic, title: title,para:para,button:button},
    {
      new: true,
      runValidators: true
    }
  );


});



//////////////////////////////////////price  ///////////////////////////////
app.get("/price", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allPrice = await Price.find({});
  res.send({ status: "OK", data: allPrice });

});

////////////////////////delete /////////////////////////////////
app.delete("/delprice/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Price.deleteOne({ _id: id })
});

///////////////////////////////////////////update /////////////////////////
app.get("/singleprice/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singlePrice = await Price.findOne({ _id })

  console.log("Edit Page" + singlePrice);
  res.send(singlePrice);

});

app.post("/uprice",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var dollar = req.body.dollar;
  var number = req.body.number;
  var month = req.body.month;
  var title = req.body.title;
  var heading1 = req.body.heading1;
  var heading2 = req.body.heading2;
  var heading3 = req.body.heading3;
  var heading4 = req.body.heading4;
  var heading5 = req.body.heading5;
  var button = req.body.button;


  const updatedUser = await Price.findByIdAndUpdate(
    _id,
    { dollar: dollar, number: number,month:month,title:title,heading1:heading1,heading2:heading2,heading3:heading3,heading4:heading4,heading5:heading5,button:button},
    {
      new: true,
      runValidators: true
    }
  );


});


//////////////////////////////////email //////////////////////
app.get("/email", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allEmail = await Email.find({});
  res.send({ status: "OK", data: allEmail });

});

///////////////////////delete ///////////////////////////////////
app.delete("/delemail/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Email.deleteOne({ _id: id })
});

/////////////////////////////////update /////////////////////////////
app.get("/singleemail/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleEmail = await Email.findOne({ _id })

  console.log("Edit Page" + singleEmail);
  res.send(singleEmail);

});

app.post("/uemail",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })




  const updatedUser = await Email.findByIdAndUpdate(
    _id,
    { title: title, src: pic,para:para,para1:para1,para2:para2},
    {
      new: true,
      runValidators: true
    }
  );


});

///////////////////////////////////seo ///////////////////////////////////
app.get("/seo", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allSeo = await Seo.find({});
  res.send({ status: "OK", data: allSeo });

});

///////////////////////////////DELETE /////////////////////////////////////
app.delete("/delseo/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Seo.deleteOne({ _id: id })
});

/////////////////////////////////update .////////////////////////////////////
app.get("/singleseo/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleSeo = await Seo.findOne({ _id })

  console.log("Edit Page" + singleSeo);
  res.send(singleSeo);

});

app.post("/useo",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })




  const updatedUser = await Seo.findByIdAndUpdate(
    _id,
    { title: title, src: pic,para:para,para1:para1,para2:para2},
    {
      new: true,
      runValidators: true
    }
  );


});


/////////////////////////////social media ///////////////////////////////////
app.get("/socialmedia", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allSocialMedia = await SocialMedia.find({});
  res.send({ status: "OK", data: allSocialMedia });

});

//////////////////////////////delete //////////////////////////////////////////
app.delete("/delsocialmedia/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await SocialMedia.deleteOne({ _id: id })
});

////////////////////////////////update ///////////////////////////////////////
app.get("/singlemedia/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleSocialMedia = await SocialMedia.findOne({ _id })

  console.log("Edit Page" + singleSocialMedia);
  res.send(singleSocialMedia);

});


app.post("/usocialmedia",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })




  const updatedUser = await SocialMedia.findByIdAndUpdate(
    _id,
    { title: title, src: pic,para:para,para1:para1,para2:para2},
    {
      new: true,
      runValidators: true
    }
  );


});


/////////////////////////////lead generation ///////////////////////////////////
app.get("/leadgeneration", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allLeadGeneration = await LeadGeneration.find({});
  res.send({ status: "OK", data: allLeadGeneration });

});

///////////////////////////////////delete //////////////////////////////////
app.delete("/delleadgeneration/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await LeadGeneration.deleteOne({ _id: id })
});

////////////////////////////////////////update ///////////////////////////////
app.get("/singlelead/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleLeadGeneration = await LeadGeneration.findOne({ _id })

  console.log("Edit Page" + singleLeadGeneration);
  res.send(singleLeadGeneration);

});

app.post("/uleadgeneration",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })




  const updatedUser = await LeadGeneration.findByIdAndUpdate(
    _id,
    { title: title, src: pic,para:para,para1:para1,para2:para2},
    {
      new: true,
      runValidators: true
    }
  );


});


//////////////////////////////////////web design /////////////////////////
app.get("/webdesign", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allWebDesign = await WebDesign.find({});
  res.send({ status: "OK", data: allWebDesign });

});

///////////////////////////////delete /////////////////////////////////////
app.delete("/delwebdesign/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await WebDesign.deleteOne({ _id: id })
});

/////////////////////////////////////update ////////////////////////////////////
app.get("/singlewebdesign/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleWebDesign = await WebDesign.findOne({ _id })

  console.log("Edit Page" + singleWebDesign);
  res.send(singleWebDesign);

});

app.post("/uwebdesign",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })




  const updatedUser = await WebDesign.findByIdAndUpdate(
    _id,
    { title: title, src: pic,para:para,para1:para1,para2:para2},
    {
      new: true,
      runValidators: true
    }
  );


});

///////////////////////////////search engine //////////////////////////////
app.get("/searchengine", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allSearchEngine = await SearchEngine.find({});
  res.send({ status: "OK", data: allSearchEngine });

});

//////////////////////////////////////delete /////////////////////////////
app.delete("/delsearchengine/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await SearchEngine.deleteOne({ _id: id })
});

//////////////////////////////////////update ////////////////////////////////
app.get("/singlesearchengine/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleSearchEngine = await SearchEngine.findOne({ _id })

  console.log("Edit Page" + singleSearchEngine);
  res.send(singleSearchEngine);

});

app.post("/usearchengine",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var title = req.body.title;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })




  const updatedUser = await SearchEngine.findByIdAndUpdate(
    _id,
    { title: title, src: pic,para:para,para1:para1,para2:para2},
    {
      new: true,
      runValidators: true
    }
  );


});

////////////////////////////////////////marketing ////////////////////////
app.get("/market", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allMarketing = await Marketing.find({});
  res.send({ status: "OK", data: allMarketing });

});
////////////////////////////////delete //////////////////////////////////
app.delete("/delmarket/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Marketing.deleteOne({ _id: id })
});

////////////////////////////////////update ///////////////////////////////
app.get("/singlemarket/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleMarketing = await Marketing.findOne({ _id })

  console.log("Edit Page" + singleMarketing);
  res.send(singleMarketing);

});

app.post("/umarket",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "icon", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })




  const updatedUser = await Marketing.findByIdAndUpdate(
    _id,
    { src: pic, title: title,para:para},
    {
      new: true,
      runValidators: true
    }
  );


});



////////////////////////////////////case study ///////////////////////
app.get("/casestudy", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allCaseStudy = await CaseStudy.find({});
  res.send({ status: "OK", data: allCaseStudy });

});
//////////////////////////////////delete ///////////////////////////////////
app.delete("/delcasestudy/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await CaseStudy.deleteOne({ _id: id })
});

////////////////////////////////////////update ////////////////////////////
app.get("/singlecasestudy/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleCaseStudy = await CaseStudy.findOne({ _id })

  console.log("Edit Page" + singleCaseStudy);
  res.send(singleCaseStudy);

});

app.post("/ucasestudy",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var title = req.body.title;
  var para = req.body.para;
  var para1 = req.body.para1;
  var targetpic = req.files.pic;
  var pic = targetpic.name;

  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })




  const updatedUser = await CaseStudy.findByIdAndUpdate(
    _id,
    { title: title, para: para,para1:para1,src:pic},
    {
      new: true,
      runValidators: true
    }
  );


});

////////////////////////////////case content ///////////////////////////
app.get("/casecontent", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allCaseContent = await CaseContent.find({});
  res.send({ status: "OK", data: allCaseContent });

});
///////////////////////////////////delete ///////////////////////////////////
app.delete("/delcasecontent/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await CaseContent.deleteOne({ _id: id })
});

/////////////////////////////////////update //////////////////////////////////
app.get("/singlecasecontent/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleCaseContent = await CaseContent.findOne({ _id })

  console.log("Edit Page" + singleCaseContent);
  res.send(singleCaseContent);

});

app.post("/ucasecontent",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var title = req.body.title;
  var para = req.body.para;


  const updatedUser = await CaseContent.findByIdAndUpdate(
    _id,
    { title: title, para: para},
    {
      new: true,
      runValidators: true
    }
  );


});


/////////////////////////////////////portfolio ////////////////////////////////
app.get("/portfolio", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allPortfolio = await Portfolio.find({});
  res.send({ status: "OK", data: allPortfolio });

});
///////////////////////////////////delete /////////////////////////////////////
app.delete("/delportfolio/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Portfolio.deleteOne({ _id: id })
});

////////////////////////////////////update /////////////////////////////////////////
app.get("/singleportfolio/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singlePortfolio = await Portfolio.findOne({ _id })

  console.log("Edit Page" + singlePortfolio);
  res.send(singlePortfolio);

});

app.post("/uportfolio",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var number = req.body.number;
  var title = req.body.title;
  var para = req.body.para;
  var button = req.body.button;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "portfolio", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const updatedUser = await Portfolio.findByIdAndUpdate(
    _id,
    { src: pic, number: number,title:title,para:para,button:button},
    {
      new: true,
      runValidators: true
    }
  );


});


/////////////////////////////////single project ////////////////////////////////
app.get("/singleproject", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allSingleProject = await SingleProject.find({});
  res.send({ status: "OK", data: allSingleProject });

});

/////////////////////////////////////DELETE //////////////////////////////////
app.delete("/delsingleproject/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await SingleProject.deleteOne({ _id: id })
});
//////////////////////////////////update ////////////////////////////////
app.get("/singleproject/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleSingleProject = await SingleProject.findOne({ _id })

  console.log("Edit Page" + singleSingleProject);
  res.send(singleSingleProject);

});

app.post("/usingleproject",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;
  var icon = req.body.icon;
  var client = req.body.client;
  var name = req.body.name;
  var icon2 = req.body.icon2;
  var data = req.body.data;
  var number = req.body.number;
  var icon3 = req.body.icon3;
  var category = req.body.category;
  var link = req.body.link;
  var icon4 = req.body.icon4;
  var url = req.body.url;
  var link2 = req.body.link2;
  var button = req.body.button;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "portfolio", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const updatedUser = await SingleProject.findByIdAndUpdate(
    _id,
    { src: pic, title: title, para: para, icon: icon, client: client, name: name, icon2: icon2, data: data, number: number, icon3: icon3, category: category, link: link, icon4: icon4, url: url, link2: link2, button: button },
    {
      new: true,
      runValidators: true
    }
  );


});


/////////////////////////////////////slidebar blog ///////////////////////////////
app.get("/blogslidebar", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allBlogSlideBar = await BlogSlideBar.find({});
  res.send({ status: "OK", data: allBlogSlideBar });

});

/////////////////////////////delete //////////////////////////////////////////
app.delete("/delblogslidebar/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await BlogSlideBar.deleteOne({ _id: id })
});

//////////////////////////////////update //////////////////////////////////////
app.get("/singleslider/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleSingleProject = await BlogSlideBar.findOne({ _id })

  console.log("Edit Page" + singleSingleProject);
  res.send(singleSingleProject);

});

app.post("/usliderblog",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var targetpic = req.files.pic;
  var pic = targetpic.name;
  var heading = req.body.heading;
  var number = req.body.number;
  var link = req.body.link;
  var para = req.body.para;
  var button = req.body.button;


  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })
 


  const updatedUser = await BlogSlideBar.findByIdAndUpdate(
    _id,
    { src: pic, heading: heading, number: number, link: link, para: para, button: button},
    {
      new: true,
      runValidators: true
    }
  );


});


////////////////////////////////////single blog /////////////////////////////////////
app.get("/singleblog", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allSingleBlog = await SingleBlog.find({});
  res.send({ status: "OK", data: allSingleBlog });

});

///////////////////////////////////delete //////////////////////////////////////////
app.delete("/delsingleblog/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await SingleBlog.deleteOne({ _id: id })
});


////////////////////////////////update /////////////////////////////////////////////
app.get("/singlesblogs/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleSingleBlog= await SingleBlog.findOne({ _id })

  console.log("Edit Page" + singleSingleBlog);
  res.send(singleSingleBlog);

});

app.post("/usingleblog",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
  var targetpic = req.files.pic;
  var pic = targetpic.name;
  var para = req.body.para;
  var para1 = req.body.para1;
  var para2 = req.body.para2;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })
 


  const updatedUser = await SingleBlog.findByIdAndUpdate(
    _id,
    { src: pic, para: para, para1: para1, para2: para2},
    {
      new: true,
      runValidators: true
    }
  );


});

///////////////////////////////auther ////////////////////////////////////////////////
app.get("/auther", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allAuther = await Auther.find({});
  res.send({ status: "OK", data: allAuther });

});

/////////////////////////////////////delete /////////////////////////////////////////
app.delete("/delauther/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Auther.deleteOne({ _id: id })
});

////////////////////////////////////update ////////////////////////////////////////////
app.get("/singleauther/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleAuther = await Auther.findOne({ _id })

  console.log("Edit Page" + singleAuther);
  res.send(singleAuther);

});

app.post("/uauther",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })
 


  const updatedUser = await Auther.findByIdAndUpdate(
    _id,
    { src: pic, title: title, para: para},
    {
      new: true,
      runValidators: true
    }
  );


});


//////////////////////////////////comment ///////////////////////////////////////////////
app.get("/comment", async (req, res) => {
  //const user = new User({name: "Asad",age:21,contact:"3242342"});

  const allComment = await Comment.find({});
  res.send({ status: "OK", data: allComment });

});

///////////////////////////////////////delete ////////////////////////////////////////////
app.delete("/delcomment/:ind",verifyToken, isAdmin, async (req, res) => {
  const id = req.params.ind;
  console.log(id);

  await Comment.deleteOne({ _id: id })
});

//////////////////////////////////////update //////////////////////////////////////////////
app.get("/singlecomment/:id",verifyToken, isAdmin, async (req, res) => {
  const _id = req.params.id;
  const singleComment = await Comment.findOne({ _id })

  console.log("Edit Page" + singleComment);
  res.send(singleComment);

});

app.post("/ucomment",verifyToken, isAdmin, async (req, res) => {

  var _id = req.body.id;
   var targetpic = req.files.pic;
  var pic = targetpic.name;
  var title = req.body.title;
  var para = req.body.para;




  const Mainpic = path.join(__dirname, "../frontend", "public", "assets", "img", "blog", pic);

  targetpic.mv(Mainpic, (err) => {
    if (err)
      console.log(err);

  })

  const updatedUser = await Comment.findByIdAndUpdate(
    _id,
    { src: pic, title: title, para: para},
    {
      new: true,
      runValidators: true
    }
  );


});


//////////////////////////////////////////////////////////register ///////////////////////////////////////////
// const RegisterSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//      role: {
//         type: String,
//         default: "user"
//     }
// });

// const AccountModel = mongoose.model("accounts", RegisterSchema);


const RegisterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

   resetPasswordToken: {
        type: String,
        default: null
    },

    resetPasswordExpires: {
        type: Date,
        default: null
    }

});

const AccountModel = mongoose.model("accounts", RegisterSchema);




app.post("/forgot-password", async (req, res) => {


    try {

        const { email } = req.body;

        // 1. Email check
        if (!email) {

            return res.json({
                success: false,
                message: "Email is required."
            });

        }

        // 2. Account find
        const account = await AccountModel.findOne({
            email: email.toLowerCase()
        });

        if (!account) {

            return res.json({
                success: false,
                message: "No account found with this email."
            });

        }

        // 3. Generate reset token
        const resetToken = crypto
            .randomBytes(32)
            .toString("hex");

        // 4. Token expiry = 15 minutes
        const resetTokenExpiry = new Date(
            Date.now() + 15 * 60 * 1000
        );

        // 5. Save token in MongoDB
        account.resetPasswordToken = resetToken;
        account.resetPasswordExpires = resetTokenExpiry;

        await account.save();

        // 6. Reset password link
        const resetLink =
            `http://localhost:3001/reset-password/${resetToken}`;

        // 7. Send email
       
        const info = await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: account.email,

            subject: "Reset Your Password",

            html: `
                <div style="
                    font-family: Arial, sans-serif;
                    max-width: 600px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                ">

                    <h2>Password Reset Request</h2>

                    <p>Hello ${account.name},</p>

                    <p>
                        We received a request to reset your password.
                    </p>

                    <p>
                        Click the button below to create a new password:
                    </p>

                    <a
                        href="${resetLink}"
                        style="
                            display: inline-block;
                            padding: 12px 25px;
                            background: #111;
                            color: white;
                            text-decoration: none;
                            border-radius: 6px;
                        "
                    >
                        Reset Password
                    </a>

                    <p style="margin-top: 25px;">
                        This link will expire in
                        <strong>15 minutes</strong>.
                    </p>

                    <p>
                        If you did not request this password reset,
                        you can safely ignore this email.
                    </p>

                    <hr>

                    <small>
                        This is an automated email. Please do not reply.
                    </small>

                </div>
            `

        });

        // Check email sending
       

        // 8. Success response
        return res.json({

            success: true,

            message:
                "Password reset link has been sent to your email."

        });

    } catch (error) {

        console.log("EMAIL ERROR:", error);

        return res.status(500).json({

            success: false,

            message:
                "Something went wrong while sending the email."

        });

    }

});




// app.post("/forgot-password", async (req, res) => {

//     try {

//         const { email } = req.body;

//         if (!email) {
//             return res.json({
//                 success: false,
//                 message: "Email is required."
//             });
//         }

//         const account = await AccountModel.findOne({
//             email: email.toLowerCase()
//         });

//         if (!account) {
//             return res.json({
//                 success: false,
//                 message: "No account found with this email."
//             });
//         }

//         // Generate random reset token
//         const resetToken = crypto.randomBytes(32).toString("hex");

//         // Token expiry: 15 minutes
//         const resetTokenExpiry = new Date(
//             Date.now() + 15 * 60 * 1000
//         );

//         // Save token in database
//         account.resetPasswordToken = resetToken;
//         account.resetPasswordExpires = resetTokenExpiry;

//         await account.save();

//         console.log("RESET TOKEN:", resetToken);

//         res.json({
//             success: true,
//             message: "Password reset request successful.",
//             resetToken: resetToken
//         });

//     } catch (error) {

//         console.log(error);

//         res.status(500).json({
//             success: false,
//             message: "Something went wrong."
//         });

//     }

// });



app.post("/reset-password/:token", async (req, res) => {

    try {

        const { token } = req.params;
        const { password, confirmPassword } = req.body;

        // Check passwords
        if (!password || !confirmPassword) {
            return res.json({
                success: false,
                message: "Password and Confirm Password are required."
            });
        }

        if (password !== confirmPassword) {
            return res.json({
                success: false,
                message: "Passwords do not match."
            });
        }

        if (password.length < 6) {
            return res.json({
                success: false,
                message: "Password must be at least 6 characters."
            });
        }

        // Find account using token
        const account = await AccountModel.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {
                $gt: new Date()
            }
        });

        // Token invalid or expired
        if (!account) {
            return res.json({
                success: false,
                message: "Reset link is invalid or expired."
            });
        }

        // Hash new password
        const hashPassword = await bcrypt.hash(password, 10);

        // Update password
        account.password = hashPassword;

        // Remove reset token
        account.resetPasswordToken = null;
        account.resetPasswordExpires = null;

        await account.save();

        res.json({
            success: true,
            message: "Password reset successfully."
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Password reset failed."
        });

    }

});












// app.post("/userregister", async (req, res) => {

//     const { name, email, password } = req.body;

//     try {

//          const hashPassword = await bcrypt.hash(password, 10);
      
//         const newAccount = new AccountModel({
//             name,
//             email,
//              password: hashPassword
//         });

//         await newAccount.save();

//         res.json({
//             success: true,
//             message: "Account created successfully"
//         });

//     } catch (err) {

//         console.log(err);

//         res.json({
//             success: false,
//             message: "Registration failed"
//         });

//     }
// });



app.post("/userregister", async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        } = req.body;


        // Check empty fields
        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword
        ) {

            return res.json({
                success: false,
                message: "All fields are required."
            });

        }


        // Check password match
        if (password !== confirmPassword) {

            return res.json({
                success: false,
                message: "Passwords do not match."
            });

        }


        // Check password length
        if (password.length < 8) {

            return res.json({
                success: false,
                message: "Password must be at least 8 characters."
            });

        }


        // Check email
        const existingAccount = await AccountModel.findOne({
            email: email.toLowerCase()
        });

        if (existingAccount) {

            return res.json({
                success: false,
                message: "Email already exists."
            });

        }


        // Combine first + last name
        const name = `${firstName} ${lastName}`.trim();


        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);


        // Create account
        const newAccount = new AccountModel({

            name: name,

            email: email.toLowerCase(),

            password: hashPassword,

            role: "user"

        });


        await newAccount.save();


        return res.json({

            success: true,

            message: "Account created successfully."

        });


    } catch (err) {

        console.log(err);

        return res.status(500).json({

            success: false,

            message: "Registration failed."

        });

    }

});



////////////////////////////////////////////////login /////////////////////////////////////
// app.post("/login", async (req, res) => {

//     const { name, email, password } = req.body;

//     try {

//         const account = await AccountModel.findOne({
//             name,
//             email
//         });

//         if (!account) {

//             return res.json({
//                 success: false,
//                 message: "Invalid Name, Email or Password"
//             });

//         }

//         const match = await bcrypt.compare(
//             password,
//             account.password
//         );

//         if (!match) {

//             return res.json({
//                 success: false,
//                 message: "Wrong Password"
//             });

//         }

//         const token = jwt.sign(
//             {
//                 id: account._id,
//                 name: account.name,
//                 email: account.email,
//                 role: account.role
//             },
//             "mySecretKey123",
//             {
//                 expiresIn: "1d"
//             }
//         );

//         res.json({
//             success: true,
//             message: "Login successful",
//             token: token,
//              role: account.role
//         });

//     } catch (error) {

//         console.log(error);

//         res.json({
//             success: false,
//             message: "Login failed"
//         });

//     }
// });


app.post("/login", async (req, res) => {

    const { name, password } = req.body;

    try {

        // Check required fields
        if (!name || !password) {
            return res.json({
                success: false,
                message: "Name and Password are required"
            });
        }


        // Find account by name
        const account = await AccountModel.findOne({
            name
        });

        if (!account) {

            return res.json({
                success: false,
                message: "Invalid Name or Password"
            });

        }


        // Compare password with hashed password
        const match = await bcrypt.compare(
            password,
            account.password
        );

        if (!match) {

            return res.json({
                success: false,
                message: "Invalid Name or Password"
            });

        }


        // Create JWT token
        const token = jwt.sign(
            {
                id: account._id,
                name: account.name,
                email: account.email,
                role: account.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );


        // Send response
        res.json({
            success: true,
            message: "Login successful",
            token: token,
            role: account.role,
            user: {
                id: account._id,
                name: account.name,
                email: account.email,
                role: account.role
            }
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: "Login failed"
        });

    }
});



module.exports = app;