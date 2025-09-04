import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-black ">Get In Touch</h2>
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


          <a href="https://github.com/TalalAhmed011" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-500">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/raja-tallal-849368282" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-500">
            <Linkedin size={24} />
          </a>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border  border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
