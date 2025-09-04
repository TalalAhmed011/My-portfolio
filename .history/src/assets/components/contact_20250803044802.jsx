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

        <form ref={form} onSubmit={sendEmail}>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />
  <input
    type="email"
    name="reply_to"
    placeholder="Your Email"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    required
  />
  <button type="submit">Send Message</button>
</form>

        
      </div>
    </section>
  );
};

export default Contact;
