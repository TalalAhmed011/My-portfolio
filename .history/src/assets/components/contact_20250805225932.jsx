import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("❗ Please fill in all required fields.");
      return;
    }

    const currentTime = new Date().toLocaleString();

    emailjs
      .send(
        "service_vosyfnc",
        "template_odojb2p",
        {
          name: name,
          email: email,
          reply_to: email,
          subject: formData.subject,
          message: message,
          time: currentTime,
        },
        "QyNl_MCgBdKdUax8g"
      )
      .then(
        () => {
          setStatus("✅ Talal will respond to you shortly.");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
  }; // ✅ This closing brace was missing

  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-black">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out for collaborations, freelance work, or just to
          say hi!
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=talal445678@gmail.com&su=Hey%20Talal&body=I%20saw%20your%20portfolio..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5 hover:text-blue-600" />z
          </a>
          <a
            href="https://github.com/TalalAhmed011"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/raja-tallal-849368282"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border text-black border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border text-black border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            value={formData.subject}
            onChange={handleChange}
            className="border text-black border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border text-black border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div className="mt-4 text-center text-green-600 font-medium">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
