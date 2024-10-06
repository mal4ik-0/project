import "./style.scss";
import { useState, useContext } from "react";
import { context } from "../store";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Импорт иконок
import Image from "../../assets/Images/NavbarImg/logo.png";

function Contact() {
    const { state, dispatch } = useContext(context);

    const [form, setForm] = useState({
        client_name: "",
        client_email: "",
        message_subject: "",
        message: ""
    });

    function submit(e) {
        e.preventDefault();
        dispatch({ type: "SET_LOADED", payload: false });

        emailjs
            .send('service_r9htwln', 'template_4srj7eq', form, {
                publicKey: 'aKImAJKARrOQD5GdS',
            })
            .then(
                () => {
                    dispatch({ type: "SET_LOADED", payload: true });
                    toast.success("Message sent successfully", { theme: "dark" });
                },
                () => {
                    dispatch({ type: "SET_LOADED", payload: true });
                    toast.error("Failed to send the message", { theme: "dark" });
                }
            );
    }

    function handleFormInfo(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <div className="contact-page-wrapper">
            <div className="section info-about">
                <h2>Contact Us</h2>
                <p>
                    Reach out to us for any inquiries or feedback. We are here to assist you and provide support for your needs.
                </p>
            </div>

            <div className="section contact-way">
                <h2>Our Contacts</h2>
                <div className="contact-item">
                    <FaPhoneAlt className="icon" />
                    <p>Phone: </p>
                    <a href="tel:+998334747477">
                        +99833 4747477
                    </a>
                </div>
                <div className="contact-item">
                    <FaEnvelope className="icon" />
                    <p>Email: </p>
                    <a href="mailto:ClickCraft95@gmail.com">
                        clickcraft95@gmail.com
                    </a>
                </div>
                <div className="contact-item">
                    <FaMapMarkerAlt className="icon" />
                    <a href="https://maps.app.goo.gl/8qsty4qUi1cxJPx38">
                        Буюк Ипак Йули 131b, Samarqand, Uzbekistan
                    </a>
                </div>
            </div>

            <div className="section form-wrapper">
                <h2>Get In Touch</h2>
                <form onSubmit={submit}>
                    <div className="form-control">
                        <input type="text" placeholder="Your name*" name="client_name" onChange={handleFormInfo} required />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Your E-mail*" name="client_email" onChange={handleFormInfo} required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject*" name="message_subject" onChange={handleFormInfo} required />
                    </div>
                    <div className="form-control">
                        <textarea rows={6} name="message" onChange={handleFormInfo} placeholder="Your message*" required></textarea>
                    </div>
                    <div className="form-control">
                        <button type="submit" disabled={!state.loaded}>Send Message</button>
                    </div>
                </form>
            </div>

            <div className="section image-section">
                <img src={Image} alt="Contact Us" />
            </div>
        </div>
    );
}

export default Contact;
