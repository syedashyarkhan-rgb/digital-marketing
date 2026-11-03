import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../public/Home";
import SecondHome from "../public/SecondHome";
import About from "../public/About";
import Service from "../public/Service";
import Email from "../public/Email";
import SEO from "../public/SEO";
import SocialMedia from "../public/SocialMedia";
import LeadGeneration from "../public/LeadGeneration";
import WebDesign from "../public/WebDesign";
import SerachEngine from "../public/SerachEngine";
import CaseStudy from "../public/CaseStudy";
import PopularProtfolio from "../public/PopularProtfolio";
import GalleryPortfolio from "../public/GalleryPortfolio";
import SingleProject from "../public/SingleProject";
import PopularPrice from "../public/PopularPrice";
import TeamMember from "../public/TeamMember";
import PopularBlog from "../public/PopularBlog";
import SliderBlog from "../public/SliderBlog";
import Blogsingleproject from "../public/Blogsingleproject";
import Contact from "../public/Contact";
import Addmainpage from "../add/Addmainpage";
import AddFeature from "../add/AddFeature";
import AddCounter from "../add/AddCounter";
import Addvideo from "../add/Addvideo";
import AddChoose from "../add/AddChoose";
import AddGalleryPortfolio from "../add/AddGalleryPortfolio";
import AddSkills from "../add/AddSkills";
import AddPromation from "../add/AddPromation";
import AddTestimonials from "../add/AddTestimonials";
import AddBlog from "../add/AddBlog";
import AddSecondHome from "../add/AddSecondHome";
import AddAbout from "../add/AddAbout";
import AddTeam from "../add/AddTeam";
import AddService from "../add/AddService";
import AddPrice from "../add/AddPrice";
import AddEmail from "../add/AddEmail";
import AddMarketing from "../add/AddMarketing";
import AddSeo from "../add/AddSeo";
import AddSocialMedia from "../add/AddSocialMedia";
import AddLeadGeneration from "../add/AddLeadGeneration";
import AddWebDesign from "../add/AddWebDesign";
import AddSearchEngine from "../add/AddSearchEngine";
import AddCaseStudy from "../add/AddCaseStudy";
import AddCaseContent from "../add/AddCaseContent";
import AddPortfolio from "../add/AddPortfolio";
import AddSingleProject from "../add/AddSingleProject";
import AddBlogslidebar from "../add/AddBlogslidebar";
import AddSingleBlog from "../add/AddSingleBlog";
import AddAuther from "../add/AddAuther";
import AddComment from "../add/AddComment";
import THome from "../table/THome";
import TFeature from "../table/TFeature";
import TCounter from "../table/TCounter";
import TVideo from "../table/TVideo";
import TChooseus from "../table/TChooseus";
import TGalleryPortfolio from "../table/TGalleryPortfolio";
import TSkills from "../table/TSkills";
import TPromation from "../table/TPromation";
import TTestimonials from "../table/TTestimonials";
import TBlog from "../table/TBlog";
import TSecondHome from "../table/TSecondHome";
import TAbout from "../table/TAbout";
import TTeam from "../table/TTeam";
import TService from "../table/TService";
import TPrice from "../table/TPrice";
import TEmail from "../table/TEmail";
import TSeo from "../table/TSeo";
import TSocialmedia from "../table/TSocialmedia";
import TLeadGeneration from "../table/TLeadGeneration";
import TWebDesign from "../table/TWebDesign";
import TSerachEngine from "../table/TSerachEngine";
import TMarketing from "../table/TMarketing";
import TCaseStudy from "../table/TCaseStudy";
import TCaseStudyContent from "../table/TCaseStudyContent";
import TPortfolio from "../table/TPortfolio";
import TSingleProject from "../table/TSingleProject";
import TSliderBlog from "../table/TSliderBlog";
import TSingleBlog from "../table/TSingleBlog";
import TAuthor from "../table/TAuthor";
import TComment from "../table/TComment";
import UHome from "../edite/UHome";
import UFeature from "../edite/UFeature";
import UCounter from "../edite/UCounter";
import UVideo from "../edite/UVideo";
import UChoose from "../edite/UChoose";
import UGalleryPortfolio from "../edite/UGalleryPortfolio";
import USkills from "../edite/USkills";
import UPromation from "../edite/UPromation";
import UTestimonials from "../edite/UTestimonials";
import UBlog from "../edite/UBlog";
import USecondHome from "../edite/USecondHome";
import UAbout from "../edite/UAbout";
import UTeam from "../edite/UTeam";
import UService from "../edite/UService";
import UPrice from "../edite/UPrice";
import UEmail from "../edite/UEmail";
import USeo from "../edite/USeo";
import USocialMedia from "../edite/USocialMedia";
import ULeadGeneration from "../edite/ULeadGeneration";
import UWebDesign from "../edite/UWebDesign";
import USerachEngine from "../edite/USerachEngine";
import UMarketing from "../edite/UMarketing";
import UCaseStudy from "../edite/UCaseStudy";
import UCaseContent from "../edite/UCaseContent";
import UPortfolio from "../edite/UPortfolio";
import USingleProject from "../edite/USingleProject";
import USliderBlog from "../edite/USliderBlog";
import USingleBlog from "../edite/USingleBlog";
import UAuther from "../edite/UAuther";
import UComment from "../edite/UComment";
import Register from "../Register";
import Login from "../Login";
import Dashboard from "../Dashboard";
import Admin from "../Admin";
import ForgotPassword from "../ForgotPassword";
import ResetPassword from "../ResetPassword";
import ProtectedRoutes from "../ProtectedRoutes"



export default function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/secondhome" element={<SecondHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/email" element={<Email />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/lead" element={<LeadGeneration />} />
          <Route path="/web" element={<WebDesign />} />
          <Route path="/searchengine" element={<SerachEngine />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/portfolio" element={<PopularProtfolio />} />
          <Route path="/galleryPortfolio" element={<GalleryPortfolio />} />
          <Route path="/singleproject" element={<SingleProject />} />
          <Route path="/price" element={<PopularPrice />} />
          <Route path="/team" element={<TeamMember />} />
          <Route path="/popularblog" element={<PopularBlog />} />
          <Route path="/sliderblog" element={<SliderBlog />} />
          <Route path="/blogsingleproject" element={<Blogsingleproject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
          <Route
            path="/reset-password/:token"
            element={<ResetPassword />}
          />


          {/* ////////////////////////////add ///////////////////////// */}
          <Route element={<ProtectedRoutes />}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addhome" element={<Addmainpage />} />
            <Route path="/addfeature" element={<AddFeature />} />
            <Route path="/addcounter" element={<AddCounter />} />
            <Route path="/addvideo" element={<Addvideo />} />
            <Route path="/addchoose" element={<AddChoose />} />
            <Route path="/addgallery" element={<AddGalleryPortfolio />} />
            <Route path="/addskills" element={<AddSkills />} />
            <Route path="/addpromation" element={<AddPromation />} />
            <Route path="/addtest" element={<AddTestimonials />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/addhome2" element={<AddSecondHome />} />
            <Route path="/addabout" element={<AddAbout />} />
            <Route path="/addteam" element={<AddTeam />} />
            <Route path="/addservice" element={<AddService />} />
            <Route path="/addprice" element={<AddPrice />} />
            <Route path="/addEmail" element={<AddEmail />} />
            <Route path="/addmarket" element={<AddMarketing />} />
            <Route path="/addseo" element={<AddSeo />} />
            <Route path="/addmedia" element={<AddSocialMedia />} />
            <Route path="/addlead" element={<AddLeadGeneration />} />
            <Route path="/addwebdesign" element={<AddWebDesign />} />
            <Route path="/addsearchengine" element={<AddSearchEngine />} />
            <Route path="/addcasestudy" element={<AddCaseStudy />} />
            <Route path="/addcasecontent" element={<AddCaseContent />} />
            <Route path="/addportfolio" element={<AddPortfolio />} />
            <Route path="/addsingleproj" element={<AddSingleProject />} />
            <Route path="/addslidebar" element={<AddBlogslidebar />} />
            <Route path="/addsingleblog" element={<AddSingleBlog />} />
            <Route path="/addauther" element={<AddAuther />} />
            <Route path="/addcomment" element={<AddComment />} />

            {/* ///////////////////////////////// table form /////////////////// */}
            <Route path="/thome" element={<THome />} />
            <Route path="/tfeature" element={<TFeature />} />
            <Route path="/tcounter" element={<TCounter />} />
            <Route path="/tvideo" element={<TVideo />} />
            <Route path="/tchoose" element={<TChooseus />} />
            <Route path="/tgportfolio" element={<TGalleryPortfolio />} />
            <Route path="/tskills" element={<TSkills />} />
            <Route path="/tpromation" element={<TPromation />} />
            <Route path="/ttest" element={<TTestimonials />} />
            <Route path="/tblog" element={<TBlog />} />
            <Route path="/tsecondhome" element={<TSecondHome />} />
            <Route path="/tabout" element={<TAbout />} />
            <Route path="/tteam" element={<TTeam />} />
            <Route path="/tservice" element={<TService />} />
            <Route path="/tprice" element={<TPrice />} />
            <Route path="/temail" element={<TEmail />} />
            <Route path="/tseo" element={<TSeo />} />
            <Route path="/tsocial" element={<TSocialmedia />} />
            <Route path="/tlead" element={<TLeadGeneration />} />
            <Route path="/tweb" element={<TWebDesign />} />
            <Route path="/tsearchengine" element={<TSerachEngine />} />
            <Route path="/tmarket" element={<TMarketing />} />
            <Route path="/tcasestudy" element={<TCaseStudy />} />
            <Route path="/tcasecontent" element={<TCaseStudyContent />} />
            <Route path="/tportfolio" element={<TPortfolio />} />
            <Route path="/tsingleproject" element={<TSingleProject />} />
            <Route path="/tsliderblog" element={<TSliderBlog />} />
            <Route path="/tsingleblog" element={<TSingleBlog />} />
            <Route path="/tauther" element={<TAuthor />} />
            <Route path="/tcomment" element={<TComment />} />


            {/* /////////////////////////////////update routers //////////////////////////// */}
            <Route path="/uhome/:id?" element={<UHome />}></Route>
            <Route path="/ufeature/:id?" element={<UFeature />}></Route>
            <Route path="/ucounter/:id?" element={<UCounter />}></Route>
            <Route path="/uvideo/:id?" element={<UVideo />}></Route>
            <Route path="/uchoose/:id?" element={<UChoose />}></Route>
            <Route path="/ugalleryportfolio/:id?" element={<UGalleryPortfolio />}></Route>
            <Route path="/uskills/:id?" element={<USkills />}></Route>
            <Route path="/upromation/:id?" element={<UPromation />}></Route>
            <Route path="/utest/:id?" element={<UTestimonials />}></Route>
            <Route path="/ublog/:id?" element={<UBlog />}></Route>
            <Route path="/ushome/:id?" element={<USecondHome />}></Route>
            <Route path="/uabout/:id?" element={<UAbout />}></Route>
            <Route path="/uteam/:id?" element={<UTeam />}></Route>
            <Route path="/uservice/:id?" element={<UService />}></Route>
            <Route path="/uprice/:id?" element={<UPrice />}></Route>
            <Route path="/uemail/:id?" element={<UEmail />}></Route>
            <Route path="/useo/:id?" element={<USeo />}></Route>
            <Route path="/usocialmedia/:id?" element={<USocialMedia />}></Route>
            <Route path="/uleadgeneration/:id?" element={<ULeadGeneration />}></Route>
            <Route path="/uwebdesign/:id?" element={<UWebDesign />}></Route>
            <Route path="/uengine/:id?" element={<USerachEngine />}></Route>
            <Route path="/umarket/:id?" element={<UMarketing />}></Route>
            <Route path="/ucasestudy/:id?" element={<UCaseStudy />}></Route>
            <Route path="/ucasecontent/:id?" element={<UCaseContent />}></Route>
            <Route path="/uportfolio/:id?" element={<UPortfolio />}></Route>
            <Route path="/usingleproject/:id?" element={<USingleProject />}></Route>
            <Route path="/usliderblog/:id?" element={<USliderBlog />}></Route>
            <Route path="/usingleblog/:id?" element={<USingleBlog />}></Route>
            <Route path="/uauther/:id?" element={<UAuther />}></Route>
            <Route path="/ucomment/:id?" element={<UComment />}></Route>

          </Route>

        </Routes>
      </Router>
    
    
    </>
  )
}
