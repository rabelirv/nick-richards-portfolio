import avatar from "../assets/fake_nick_r.jpg";
import { FaInstagram, FaYoutube, FaEnvelope} from "react-icons/fa";


function Footer() {
    return (
    <div className="footer">
       <Socials/>
       <Avatar/>
    </div>
    );
  }

  function Socials() {
    return (
    <div className="socials-container">
        <h1>Follow Nick</h1>
        <div className="icon-row">
           <a href="https://www.instagram.com/n.richh_?igsh=MW83bW1jcXp4eXh6MA=="><div className="icon-wrapper"> <FaInstagram size={30} color="696968"/></div></a> 
            <a><div className="icon-wrapper"><FaYoutube  size={30} color="696968"/></div></a>
            <a><div className="icon-wrapper"><FaEnvelope size={30} color="696968"/></div></a>        
        </div>
    </div>
    );
  }

  function Avatar() {
    return (
    <div className="avatar-container">
        <div className="avatar">
            <img src={avatar}/>
        </div>
    </div>
    );
  }
  
  export default Footer;