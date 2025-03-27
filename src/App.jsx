import './App.css';
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import Headshots from './componenets/Headshots';
import Resume from './componenets/Resume';
import MediaContact from './componenets/MediaContact';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headshots" element={<Headshots />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/media-contact" element={<MediaContact />} />
      </Routes>
    </div>
  )
}