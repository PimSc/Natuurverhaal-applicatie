import './App.css'
import {Helmet} from "react-helmet";
import {Routes, Route, Navigate, ScrollRestoration} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import OurStory from './pages/ourStory/OurStory.jsx';
import BlogEdit from './pages/blogPostEdit/BlogEdit.jsx';
import Excursions from './pages/excursions/Excursions.jsx';
import Login from './pages/login/Login.jsx';
import Contact from './pages/contact/Contact.jsx';
import NotFound from "./pages/notFound/NotFound.jsx";
import Navigation from './components/navigation/Navigation.jsx';
import Header from "./components/header/Header.jsx";
import BulletinBoard from "./pages/bulletinBoard/BulletinBoard.jsx";
import MyBlogs from "./pages/myBlogs/MyBlogs.jsx";
import ProfileEdit from "./pages/profileEdit/ProfileEdit.jsx";
import BulletinBoardPostDetail from "./pages/bulletinBoardPostDetail/BulletinBoardPostDetail.jsx";
import BlogPostDetail from "./pages/blogPostDetail/BlogPostDetail.jsx";
import ExcursionPostDetail from "./pages/excursionPostDetail/ExcursionPostDetail.jsx";
import WriteExcursion from "./pages/writeExcursion/WriteExcursion.jsx";
import WriteBlog from "./pages/writeBlog/WriteBlog.jsx";
import ProfileDetail from "./pages/profileDetail/ProfileDetail.jsx";
import WriteBulletin from "./pages/writeBulletin/WriteBulletin.jsx";
import {AuthContext} from "././context/AuthContextProvider.jsx";
import {useContext} from "react";
import AdminPanel from "./pages/adminPanel/AdminPanel.jsx";
import MyBulletinPosts from "./pages/myBulletinPosts/MyBulletinPosts.jsx";
import BulletinBoardEdit from "./pages/bulletinBoardEdit/BulletinBoardEdit.jsx";
import MyExcursions from "./pages/myExcursions/MyExcursions.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollToTop from "./helpers/ScrollToTop.jsx";




function App() {

    const {isAuth, user} = useContext(AuthContext);


    return (
        <>


            {/*components visible on every page*/}
            <Header/>

            <Navigation/>

            <ScrollToTop/>
            <Routes> {/*Switch between these pages*/}
                {/*Pages in the nav*/}
                <Route path="/" element={<div><Helmet><title>Natuurverhaal | Home</title></Helmet><Home/></div>}/>
                <Route path="/onsVerhaal"
                       element={<div><Helmet><title>Natuurverhaal | Ons verhaal</title></Helmet><OurStory/></div>}/>
                <Route path="/blogs"
                       element={<div><Helmet><title>Natuurverhaal | Blogs</title></Helmet><BlogEdit/></div>}/>
                <Route path="/excursies"
                       element={<div><Helmet><title>Natuurverhaal | Excursies</title></Helmet><Excursions/></div>}/>
                <Route path="/Prikbord"
                       element={<div><Helmet><title>Natuurverhaal | Prikbord</title></Helmet><BulletinBoard/></div>}/>
                <Route path="/contact"
                       element={<div><Helmet><title>Natuurverhaal | Contact</title></Helmet><Contact/></div>}/>
                <Route path="/login"
                       element={<div><Helmet><title>Natuurverhaal | Login</title></Helmet><Login/></div>}/>

                {/*Pages outside the nav*/}
                <Route path="/blogposts/:id"
                       element={<div><Helmet><title>Natuurverhaal | Blogpost</title></Helmet><BlogPostDetail/></div>}/>
                <Route path="/prikbordposts/:id"
                       element={<div><Helmet><title>Natuurverhaal | Prikbordpost</title></Helmet><BulletinBoardPostDetail/>
                       </div>}/>
                <Route path="/excursiePosts/:id"
                       element={<div><Helmet><title>Natuurverhaal | Excursie</title></Helmet><ExcursionPostDetail/>
                       </div>}/>
                <Route path="/ProfileDetail/:username"
                       element={<div><Helmet><title>Natuurverhaal | Profiel</title></Helmet><ProfileDetail/></div>}/>



                {/*USER PAGINA`S*/}
                {/*<Route path="/profileEdit" element={isAuth ? <profileEdit /> : <Navigate to="/login" />} />*/}
                <Route path="/ProfileEdit"
                       element={<div><Helmet><title>Natuurverhaal | Profiel bewerken</title></Helmet>{isAuth ?
                           <ProfileEdit/> : <Navigate to="/login"/>}</div>}/>
                <Route path="/mijnBlogs"
                       element={<div><Helmet><title>Natuurverhaal | Mijn blogs</title></Helmet>{isAuth ? <MyBlogs/> :
                           <Navigate to="/login"/>}</div>}/>
                <Route path="/mijnprikbord"
                       element={<div><Helmet><title>Natuurverhaal | Mijn Prikbord</title></Helmet>{isAuth ?
                           <MyBulletinPosts/> : <Navigate to="/login"/>}</div>}/>
                <Route path="/writeBulletin"
                       element={<div><Helmet><title>Natuurverhaal | Prikbord bericht schrijven</title></Helmet>{isAuth ?
                           <WriteBulletin/> : <Navigate to="/login"/>}</div>}/>
                <Route path="/writeBlog"
                       element={<div><Helmet><title>Natuurverhaal | Blog schrijven</title></Helmet>{isAuth ?
                           <WriteBlog/> : <Navigate to="/login"/>}</div>}/>
                <Route path="/blogedit/:id"
                       element={<div><Helmet><title>Natuurverhaal | Blog aanpassen</title></Helmet>{isAuth ?
                           <BlogEdit/> : <Navigate to="/login"/>}</div>}/>
                <Route path="/editprikbord/:id"
                       element={<div><Helmet><title>Natuurverhaal | Prikbord aanpassen</title></Helmet>{isAuth ?
                           <BulletinBoardEdit/> : <Navigate to="/login"/>}</div>}/>


                {/*ADMIN PAGINA`S*/}
                <Route path="/writeExcursion" element={isAuth ? <WriteExcursion/> : <Navigate to="/login"/>}/>
                {/*<Route path="/AdminPanel" element={isAuth ? <AdminPanel /> : <Navigate to="/login" />} />*/}
                <Route path="/AdminPanel" element={<div><Helmet><title>Natuurverhaal | Admin panel</title>
                </Helmet>{isAuth && user.role === 'ROLE_ADMIN' ? <AdminPanel/> : <Navigate to="/login"/>}</div>}/>
                <Route path="/mijnExcursies" element={<div><Helmet><title>Natuurverhaal | Mijn excursies</title>
                </Helmet>{isAuth && user.role === 'ROLE_ADMIN' ? <MyExcursions/> : <Navigate to="/login"/>}</div>}/>
                <Route path="/excursieEdit/:id" element={<div><Helmet><title>Natuurverhaal | Excursie aanpassen</title>
                </Helmet>{isAuth && user.role === 'ROLE_ADMIN' ? <BlogEdit/> : <Navigate to="/login"/>}</div>}/>

                {/*/PublicProfile/${post.username}*/}

                {/*Not found page*/}
                <Route
                    path="*" element={<div><Helmet><title>Natuurverhaal | Oops..</title></Helmet><NotFound/></div>}
                />
            </Routes>


            <footer>
                <Footer/>
            </footer>


            {/*Route voorbeeld zonder helmet*/}
            {/*        <Route path="/blogPostEdit" element={<BlogEdit/>}/>*/}


        </>
    )
}

export default App
