import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      topic: 'General Inquiry',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#F5EFE0] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#4A3933] mb-3">Get in Touch</h1>
          <p className="text-[#6B5B54] text-lg">Brewed to Perfection, Served with Love.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address */}
              <div>
                <h3 className="text-sm font-semibold text-[#4A3933] mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Address
                </h3>
                <p className="text-[#6B5B54]">
                  123 Coffee Bean Lane, Aroma City, CA 90210
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-sm font-semibold text-[#4A3933] mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </h3>
                <p className="text-[#6B5B54]">(555) 123-4567</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-semibold text-[#4A3933] mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </h3>
                <p className="text-[#6B5B54]">contact@brewhavencafe.com</p>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="text-sm font-semibold text-[#4A3933] mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Opening Hours
                </h3>
                <p className="text-[#6B5B54]">Mon - Fri: 7 AM - 6 PM</p>
                <p className="text-[#6B5B54]">Sat - Sun: 8 AM - 5 PM</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.646262257866!2d81.31411927503666!3d21.206206780487857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293df84bb5941f%3A0x4577389661e69a6d!2sCoffee%20Griham!5e0!3m2!1sen!2sin!4v1765542356307!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brew Haven Cafe Location"
              ></iframe>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm shadow-lg rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-[#4A3933] mb-8 text-center">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4A3933] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#D4C5B9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] text-[#4A3933]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4A3933] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#D4C5B9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] text-[#4A3933]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Topic Dropdown */}
              <div>
                <label className="block text-sm font-medium text-[#4A3933] mb-2">
                  Topic
                </label>
                <div className="relative">
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[#D4C5B9] rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4A574] text-[#4A3933]"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Catering">Catering</option>
                    <option value="Events">Events</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4A3933] pointer-events-none" />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-[#4A3933] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white border border-[#D4C5B9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] text-[#4A3933] resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#4A3933] text-white rounded-full font-semibold hover:bg-[#3D3833] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
