import { useState } from "react";
import SvgHeading from "../SvgHeading/SvgHeading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-background-color text-white py-1 pb-10 px-6 md:px-16">
      <SvgHeading heading="Contact Me" />
      <div
        data-aos="fade-down"
        className="my-5 flex flex-col lg:flex-row gap-10"
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 contact-form-background-color p-6 rounded-xl shadow-md"
        >
          <div data-aos="fade-right" className="mb-4">
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none"
            />
          </div>
          <div data-aos="fade-right" className="mb-4">
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none"
            />
          </div>
          <div data-aos="fade-right" className="mb-4">
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none"
            />
          </div>
          <div className="transform transition-transform duration-300 ease-in-out hover:-translate-y-1">
            <button
              data-aos="fade-right"
              type="submit"
              className="bg-[#005435] hover:bg-[#183434] hover:text-[#005435] px-4 py-2 font-bold rounded text-color"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Google Map */}
        <div data-aos="fade-up" className="lg:w-1/2 h-96">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.2731210902095!2d81.84439837531658!3d25.435801977560837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853436e490b871%3A0xfad01e617a1a0ae7!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718168499911!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
