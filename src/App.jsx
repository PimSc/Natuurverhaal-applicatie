import './App.css'
import {Helmet} from "react-helmet";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import OnsVerhaal from './pages/onsVerhaal/OnsVerhaal.jsx';
import BlogEdit from './pages/blogEdit/BlogEdit.jsx';
import Excursies from './pages/excursies/Excursies.jsx';
import Login from './pages/login/Login.jsx';
import Contact from './pages/contact/Contact.jsx';
import NotFound from "./pages/notFound/NotFound.jsx";
import Navigation from './components/navigation/Navigation.jsx';
import Header from "./components/header/Header.jsx";
import TermsAndPrivacy from "./pages/termsAndPrivacy/TermsAndPrivacy.jsx";
import Prikbord from "./pages/prikbord/Prikbord.jsx";
import MijnBlogs from "./pages/mijnBlogs/MijnBlogs.jsx";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit.jsx";
import PrikbordPostDetail from "./pages/prikbordPostDetail/PrikbordPostDetail.jsx";
import BlogPostDetail from "./pages/blogPostDetail/BlogPostDetail.jsx";
import ExcursiePostDetail from "./pages/excursiePostDetail/ExcursiePostDetail.jsx";
import WriteExcursion from "./pages/writeExcursion/WriteExcursion.jsx";
import WriteBlog from "./pages/writeBlog/WriteBlog.jsx";
import ProfileDetail from "./pages/profileDetail/ProfileDetail.jsx";
import WriteBulletin from "./pages/writeBulletin/WriteBulletin.jsx";
import {AuthContext} from "././context/AuthContextProvider.jsx";
import {useContext} from "react";
import AdminPanel from "./pages/adminPanel/AdminPanel.jsx";
import EditBlog from "./pages/editBlog/EditBlog.jsx";

function App() {

    const { isAuth, user} = useContext(AuthContext);

  return (
    <>



        {/*components visible on every page*/}
        <Header/>
        <Navigation/>

        <Routes> {/*Switch between these pages*/}
            {/*Pages in the nav*/}
            <Route path="/" element={<div><Helmet><title>Natuurverhaal | Home</title></Helmet><Home /></div>}/>
            <Route path="/onsVerhaal" element={<div><Helmet><title>Natuurverhaal | Ons verhaal</title></Helmet><OnsVerhaal /></div>}/>
            <Route path="/blogs" element={<div><Helmet><title>Natuurverhaal | Blogs</title></Helmet><BlogEdit /></div>}/>
            <Route path="/excursies" element={<div><Helmet><title>Natuurverhaal | Excursies</title></Helmet><Excursies /></div>}/>
            <Route path="/prikbord" element={<div><Helmet><title>Natuurverhaal | Prikbord</title></Helmet><Prikbord /></div>}/>
            <Route path="/contact" element={<div><Helmet><title>Natuurverhaal | Contact</title></Helmet><Contact /></div>}/>
            <Route path="/login" element={<div><Helmet><title>Natuurverhaal | Login</title></Helmet><Login /></div>}/>

            {/*Pages outside the nav*/}
            <Route path="/blogposts/:id" element={<div><Helmet><title>Natuurverhaal | Blogpost</title></Helmet><BlogPostDetail /></div>}/>
            <Route path="/prikbordposts/:id" element={<div><Helmet><title>Natuurverhaal | Prikbordpost</title></Helmet><PrikbordPostDetail /></div>}/>
            <Route path="/excursiePosts/:id" element={<div><Helmet><title>Natuurverhaal | Excursie</title></Helmet><ExcursiePostDetail /></div>}/>
            <Route path="/ProfileDetail/:username" element={<div><Helmet><title>Natuurverhaal | Profiel</title></Helmet><ProfileDetail/></div>}/>


            <Route path="/termsAndPrivacy" element={<div><Helmet><title>Natuurverhaal | TermsAndPrivacy</title></Helmet><TermsAndPrivacy /></div>}/>


            {/*USER PAGINA`S*/}
            {/*<Route path="/ProfileEdit" element={isAuth ? <ProfileEdit /> : <Navigate to="/login" />} />*/}
            <Route path="/ProfileEdit" element={<div><Helmet><title>Natuurverhaal | Profiel bewerken</title></Helmet>{isAuth ? <ProfileEdit /> : <Navigate to="/login" />}</div>} />
            <Route path="/mijnBlogs" element={<div><Helmet><title>Natuurverhaal | Mijn blogs</title></Helmet>{isAuth ? <MijnBlogs /> : <Navigate to="/login" />}</div>} />
            <Route path="/writeBulletin" element={<div><Helmet><title>Natuurverhaal | Prikbord bericht schrijven</title></Helmet>{isAuth ? <WriteBulletin /> : <Navigate to="/login" />}</div>} />
            <Route path="/writeBlog" element={<div><Helmet><title>Natuurverhaal | Blog schrijven</title></Helmet>{isAuth ? <WriteBlog /> : <Navigate to="/login" />}</div>} />
            <Route path="/editblog/:id" element={<div><Helmet><title>Natuurverhaal | Blog aanpassen</title></Helmet>{isAuth ? <EditBlog /> : <Navigate to="/login" />}</div>} />


            {/*ADMIN PAGINA`S*/}
            <Route path="/writeExcursion" element={isAuth ? <WriteExcursion /> : <Navigate to="/login" />} />
            {/*<Route path="/AdminPanel" element={isAuth ? <AdminPanel /> : <Navigate to="/login" />} />*/}
            <Route
                path="/AdminPanel"
                element={<div><Helmet><title>Natuurverhaal | Admin panel</title></Helmet>{isAuth && user.role === 'ROLE_ADMIN' ? <AdminPanel /> : <Navigate to="/login" />}</div>} />


            {/*/PublicProfile/${post.username}*/}

            {/*Not found page*/}
            <Route
                path="*" element={<div><Helmet><title>Natuurverhaal | Oops..</title></Helmet><NotFound /></div>}
            />


        </Routes>

{/*Route voorbeeld zonder helmet*/}
{/*        <Route path="/blogEdit" element={<BlogEdit/>}/>*/}




        {/*Footer element*/}



    </>
  )
}

export default App
