import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "your_service_id",       // Replace with your actual service ID
        "your_template_id",      // Replace with your actual template ID
        {
          name: formData.user_name,
          reply_to: formData.user_email,
          title: formData.subject,
          message: formData.message,
        },
        "your_public_key"        // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Talal will respond to you in a short period.");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>

      <form className="flex flex-col gap-4" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={formData.user_email}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all"
        >
          Send Message
        </button>

        {status && (
          <div className="mt-4 text-center text-green-600 font-medium">
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
