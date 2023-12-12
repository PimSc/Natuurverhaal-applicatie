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

function App() {

  return (
    <>
        <Navigation/>  {/*blijft standaard staan*/}

        <Routes> {/*Hier wordt tussen gewisseld*/}
            <Route path="/" element={<Home/>}/>
            <Route path="/OnsVerhaal" element={<OnsVerhaal/>}/>
            <Route path="/Blogs" element={<Blogs/>}/>
            <Route path="/Excursies" element={<Excursies/>}/>
            <Route path="/Account" element={<Account/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App
