import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Authentication from './Authentication'
import Contact from './Contact'


function AllComponents() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />  
                <Route path="login" element={<Authentication />} />
                <Route path="register" element={<Authentication />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;
