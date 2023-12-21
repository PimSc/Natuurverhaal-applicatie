import './App.css'
import {Helmet} from "react-helmet";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import OnsVerhaal from './pages/onsVerhaal/OnsVerhaal';
import Blogs from './pages/blogs/Blogs';
import Excursies from './pages/excursies/Excursies';
import Account from './pages/account/Account';
import Contact from './pages/contact/Contact';
import NotFound from "./pages/notFound/NotFound";
import Navigation from './components/navigation/Navigation';
import Header from "./components/header/Header.jsx";
import Registreer from "./pages/registreer/Registreer.jsx";
import PostDetail from "./pages/postDetail/PostDetail.jsx";
// import ViewBlog from "./components/viewBlog/ViewBlog.jsx";

function App() {

  return (
    <>



        <Header/>      {/*visible on every page*/}
        <Navigation/>  {/*visible on every page*/}

        <Routes> {/*Switch between these pages*/}
            {/*Pages in the nav*/}
            <Route path="/" element={<div><Helmet><title>Natuurverhaal | Home</title></Helmet><Home /></div>}/>
            <Route path="/onsVerhaal" element={<div><Helmet><title>Natuurverhaal | Ons verhaal</title></Helmet><OnsVerhaal /></div>}/>
            <Route path="/blogs" element={<div><Helmet><title>Natuurverhaal | Blogs</title></Helmet><Blogs /></div>}/>
            <Route path="/excursies" element={<div><Helmet><title>Natuurverhaal | Excursies</title></Helmet><Excursies /></div>}/>
            <Route path="/account" element={<div><Helmet><title>Natuurverhaal | Account</title></Helmet><Account /></div>}/>
            <Route path="/contact" element={<div><Helmet><title>Natuurverhaal | Contact</title></Helmet><Contact /></div>}/>

            {/*Pages outside the nav*/}
            <Route path="/registreer" element={<div><Helmet><title>Natuurverhaal | Registreer</title></Helmet><Registreer /></div>}/>
            <Route path="//posts/:id" element={<div><Helmet><title>Natuurverhaal | Registreer</title></Helmet><PostDetail /></div>}/>

            {/*<Route path="/Blog/:id" element={<ViewBlog/>}/>*/}
            <Route path="*" element={<div><Helmet><title>Natuurverhaal | Oops..</title></Helmet><NotFound /></div>}/>
        </Routes>

{/*Route voorbeeld zonder helmet*/}
        {/*<Route path="/blogs" element={<Blogs/>}/>*/}

    </>
  )
}

export default App
