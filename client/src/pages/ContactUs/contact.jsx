import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Mail,
  User,
  FileText,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import "./contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [whatsAppMessage, setWhatsAppMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs
        .send
        // "service_p2wasj8",
        // "template_826e4qo",
        // {
        //   from_name: formData.name,
        //   from_email: formData.email,
        //   subject: formData.subject,
        //   message: formData.message,
        // },
        // "Ym-M8BOZlAYOTctkV"
        ();

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const redirectToWhatsApp = () => {
    const phone = "9265417900";
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsAppMessage
    )}`;
    window.open(link, "_blank");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="wrapper">
        <div className="flexColCenter paddings innerWidth contact-container">
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-description">
            Have questions or feedback? We'd love to hear from you! Fill out the
            form below and we'll get back to you shortly.
          </p>

          <div className="form-group">
            <label htmlFor="whatsapp">Message via WhatsApp</label>
            <div className="input-with-icon textarea-icon-align">
              <MessageCircle size={20} className="input-icon" />
              <textarea
                id="whatsapp"
                name="whatsapp"
                value={whatsAppMessage}
                onChange={(e) => setWhatsAppMessage(e.target.value)}
                rows="3"
                placeholder="Type your WhatsApp message here..."
              ></textarea>
            </div>
          </div>

          <button
            onClick={redirectToWhatsApp}
            className="send-message-button"
            style={{
              backgroundColor: "#25D366",
              marginTop: 20,
            }}
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </button>

          {isLoading ? (
            <div className="flexColCenter contact-loader">
              <div className="custom-spinner">
                <div className="spinner-inner-1"></div>
                <div className="spinner-inner-2"></div>
              </div>
              <p className="loading-text">Sending your message...</p>
            </div>
          ) : isSubmitted ? (
            <div className="flexColCenter contact-success-message">
              <svg
                className="success-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="success-text">Message Sent Successfully!</p>
              <p className="success-subtext">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <span>For Email:</span>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-with-icon">
                  <User size={20} className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <div className="input-with-icon">
                  <Mail size={20} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className="input-with-icon">
                  <FileText size={20} className="input-icon" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Inquiry about a property"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <div className="input-with-icon textarea-icon-align">
                  <MessageSquare size={20} className="input-icon" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="send-message-button">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
