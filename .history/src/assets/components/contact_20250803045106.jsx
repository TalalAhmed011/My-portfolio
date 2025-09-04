import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",     // ✅ Replace with your actual ID
        "your_template_id",    // ✅ Replace with your actual ID
        form.current,
        "your_public_key"      // ✅ Replace with your actual PUBLIC key
      )
      .then(
        (result) => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-black">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out for collaborations, freelance work, or just to say hi!
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://mail.google.com/mail/?view=cm&to=talal445678@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500"
          >
            <Mail size={24} />
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

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="border text-black border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="border text-black border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="border text-black border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all"
          >
            Send Message
          </button>
        </form>

        {messageSent && (
          <div className="mt-6 text-green-600 font-medium">
            Thank you! Talal will respond to your message shortly.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
