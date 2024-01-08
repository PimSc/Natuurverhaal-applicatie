import './App.css'
import {Helmet} from "react-helmet";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import OnsVerhaal from './pages/onsVerhaal/OnsVerhaal.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import Excursies from './pages/excursies/Excursies.jsx';
import Login from './pages/login/Login.jsx';
import Contact from './pages/contact/Contact.jsx';
import NotFound from "./pages/notFound/NotFound.jsx";
import Navigation from './components/navigation/Navigation.jsx';
import Header from "./components/header/Header.jsx";
import PostDetail from "./pages/postDetail/PostDetail.jsx";
import TermsAndPrivacy from "./pages/TermsAndPrivacy/TermsAndPrivacy.jsx";
import Prikbord from "./pages/prikbord/Prikbord.jsx";
import MijnBlogs from "./pages/mijnBlogs/MijnBlogs.jsx";
import Profiel from "./pages/profiel/Profiel.jsx";

function App() {

  return (
    <>


        {/*components visible on every page*/}
        <Header/>
        <Navigation/>

        <Routes> {/*Switch between these pages*/}
            {/*Pages in the nav*/}
            <Route path="/" element={<div><Helmet><title>Natuurverhaal | Home</title></Helmet><Home /></div>}/>
            <Route path="/onsVerhaal" element={<div><Helmet><title>Natuurverhaal | Ons verhaal</title></Helmet><OnsVerhaal /></div>}/>
            <Route path="/blogs" element={<div><Helmet><title>Natuurverhaal | Blogs</title></Helmet><Blogs /></div>}/>
            <Route path="/excursies" element={<div><Helmet><title>Natuurverhaal | Excursies</title></Helmet><Excursies /></div>}/>
            <Route path="/prikbord" element={<div><Helmet><title>Natuurverhaal | Prikbord</title></Helmet><Prikbord /></div>}/>
            <Route path="/contact" element={<div><Helmet><title>Natuurverhaal | Contact</title></Helmet><Contact /></div>}/>

            {/*Pages in account dropdrop menu*/}
            <Route path="/login" element={<div><Helmet><title>Natuurverhaal | Login</title></Helmet><Login /></div>}/>
            <Route path="/mijnBlogs" element={<div><Helmet><title>Natuurverhaal | Mijn Blogs</title></Helmet><MijnBlogs /></div>}/>
            <Route path="/Profiel" element={<div><Helmet><title>Natuurverhaal | Profiel</title></Helmet><Profiel /></div>}/>

            {/*Pages outside the nav*/}
            <Route path="//posts/:id" element={<div><Helmet><title>Natuurverhaal | Registreer</title></Helmet><PostDetail /></div>}/>
            <Route path="/termsAndPrivacy" element={<div><Helmet><title>Natuurverhaal | TermsAndPrivacy</title></Helmet><TermsAndPrivacy /></div>}/>





            {/*Not found page*/}
            <Route path="*" element={<div><Helmet><title>Natuurverhaal | Oops..</title></Helmet><NotFound /></div>}/>
        </Routes>

{/*Route voorbeeld zonder helmet*/}
        {/*<Route path="/blogs" element={<Blogs/>}/>*/}




        {/*Footer element*/}



    </>
  )
}

export default App
