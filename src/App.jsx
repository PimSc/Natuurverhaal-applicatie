import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import OnsVerhaal from './pages/onsVerhaal/OnsVerhaal';
import Blogs from './pages/blogs/Blogs';
import Excursies from './pages/excursies/Excursies';
import Account from './pages/account/Account';
import Contact from './pages/contact/Contact';
import Navigation from './components/navigation/Navigation.jsx';
import NotFound from "./pages/notFound/NotFound.jsx";
import {Helmet} from "react-helmet";

function App() {

  return (
    <>
        <Navigation/>  {/*blijft standaard staan*/}
        <Routes> {/*Hier wordt tussen gewisseld*/}
            <Route path="/" element={<div><Helmet><title>Home</title></Helmet><Home/></div>}/>
            <Route path="/onsVerhaal" element={<div><Helmet><title>Ons verhaal</title></Helmet><OnsVerhaal/></div>}/>
            <Route path="/blogs" element={<div><Helmet><title>Blogs</title></Helmet><Blogs/></div>}/>
            <Route path="/excursies" element={<div><Helmet><title>Excursies</title></Helmet><Excursies /></div>}/>
            <Route path="/account" element={<div><Helmet><title>Account</title></Helmet><Account/></div>}/>
            <Route path="/contact" element={<div><Helmet><title>Contact</title></Helmet><Contact/></div>}/>
            <Route path="*" element={<div><Helmet><title>Not Found</title></Helmet><NotFound/></div>}/>
        </Routes>



    </>
  )
}

export default App
