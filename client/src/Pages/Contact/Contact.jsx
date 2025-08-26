
//client/src/Pages/Contact/Contact.jsx

import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg ) { // Kontrollera att alla fält är ifyllda
        toast.error("Vänligen fyll i alla fält");
        return;
      }
      const res = await axios.post("http://localhost:8080/api/v1/portfolio/sendEmail", {
        name,
        email,
        phone,
        msg,
      });
      if (res.data.success) {
        toast.success(res.data.message || "Ditt meddelande har skickats framgångsrikt");
        setName("");
        setEmail("");
        setPhone(""); 
        setMsg("");
      } else {
        toast.error(res.data.message || "Fel vid att skicka e-post");
      }
    } catch (error) {
      console.log("Fel vid e-postskick:", error.response?.data || error.message);
      toast.error("Kunde inte skicka meddelande.");
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <motion.img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="contact"
                  className="image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card2">
              <h6>
                Contact Me
                <a href="https://www.linkedin.com/in/zabi-sideqi-4564432a0/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin color="blue" size={30} className="ms-2" />
                </a>
                <a href="https://github.com/Zabi-23/" target="_blank" rel="noopener noreferrer">
                  <BsGithub color="black" size={30} className="ms-2" />
                </a>
                
              </h6>
              {/* Lägg till telefonnummerlänk */}
              <p>
                Phone: +46769242525
                <span className="sms-link">
                  {" "}Send SMS:{" "}
                  <a href="sms:+46769242525">
                    Send a SMS to me
                  </a>
                </span>
              </p>
              <div className="row px-3 mb-4">
                <div className="line" />
                <small className="or text-center">Or</small>
                <div className="line" />
              </div>
              <div className="row px-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Write your Name"
                  className="mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="row px-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Write your Email Address"
                  className="mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="row px-3">
                <textarea
                  name="msg"
                  placeholder="Write your Message"
                  className="mb-3"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <div className="row px-3">
                <button className="button" onClick={handleSubmit}>
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;