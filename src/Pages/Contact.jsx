import React from "react";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import ContactImage from "../assets/Head_Contact.jpg"; // Make sure the path is correct
import Laptop from "../assets/laptop.jpg";
import Building from "../assets/building2.jpeg";

function Contact() {
  return (
    <div className="bg-base-100 text-base-content">
      <Navbar />

      {/* Hero Section using shared Header component */}
      <Header
        imageSrc={Building}
        title="Contact Us"
        subtitle="Let’s connect — we’d love to hear from you."
      />

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-8 lg:px-32">
        <div className="max-w-6xl mx-auto bg-base-200 shadow-md rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* Left: Info */}
          <div className="relative p-10 flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-40"
              style={{ backgroundImage: `url(${Laptop})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Overlay Content */}
            <div className="relative z-10 text-white">
              <h2 className="text-7xl font-bold mb-4 font-poppins pb-5">Get in Touch</h2>
              <p className="mb-6 text-white/80">
                Have a question or just want to say hi? Fill in the form and we’ll get back to you as soon as we can.
              </p>
              <div className="space-y-3 text-white/70">
                <p><strong>📞 Phone:</strong> +60 123-456-789</p>
                <p><strong>📧 Email:</strong> contact@example.com</p>
                <p><strong>📍 Address:</strong> 123 Jalan Tech, KL, Malaysia</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-10 bg-base-100 bg-white">
            <form
              action="mailto:chickenzcanfly134@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label className="label">
                  <span className="label-text text-black font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-slate-100"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black font-semibold">Phone Number</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    name="countryCode"
                    className="select select-bordered bg-slate-100 w-full sm:w-36"
                    required
                  >
                    <optgroup label="Asia">
                      <option value="+60">🇲🇾 Malaysia (+60)</option>
                      <option value="+65">🇸🇬 Singapore (+65)</option>
                      <option value="+62">🇮🇩 Indonesia (+62)</option>
                      <option value="+66">🇹🇭 Thailand (+66)</option>
                      <option value="+91">🇮🇳 India (+91)</option>
                      <option value="+81">🇯🇵 Japan (+81)</option>
                      <option value="+82">🇰🇷 South Korea (+82)</option>
                    </optgroup>
                    <optgroup label="Europe">
                      <option value="+44">🇬🇧 UK (+44)</option>
                      <option value="+49">🇩🇪 Germany (+49)</option>
                      <option value="+33">🇫🇷 France (+33)</option>
                      <option value="+39">🇮🇹 Italy (+39)</option>
                      <option value="+34">🇪🇸 Spain (+34)</option>
                    </optgroup>
                    <optgroup label="Americas">
                      <option value="+1">🇺🇸 USA/Canada (+1)</option>
                      <option value="+55">🇧🇷 Brazil (+55)</option>
                      <option value="+52">🇲🇽 Mexico (+52)</option>
                    </optgroup>
                    <optgroup label="Oceania">
                      <option value="+61">🇦🇺 Australia (+61)</option>
                      <option value="+64">🇳🇿 New Zealand (+64)</option>
                    </optgroup>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="123-456-789"
                    className="input input-bordered w-full bg-slate-100"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full bg-slate-100"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black font-semibold">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered w-full bg-slate-100"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-black font-semibold">Message</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full bg-slate-100"
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-full bg-red-500 border-black hover:bg-white hover:text-black">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
