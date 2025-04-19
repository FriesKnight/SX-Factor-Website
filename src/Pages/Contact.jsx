import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div className="bg-base-100 text-base-content">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/images/contact-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-white mt-4 max-w-2xl text-lg">
            We'd love to hear from you. Fill out the form below and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form with mailto */}
      <div className="py-16 px-4 sm:px-8 lg:px-32">
        <div className="max-w-2xl mx-auto bg-base-200 shadow-md rounded-lg p-8">
          <form
            action="mailto:chickenzcanfly134@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject of your message"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Your message..."
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
