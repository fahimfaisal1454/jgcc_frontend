import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Later connect to backend API
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  return (
    <AdminLayout title="Contact Us">
      <div className="bg-white shadow-sm">

        {/* Orange Section Title */}
        <div className="bg-orange-500 text-white py-2 text-center font-semibold">
          Contact Us
        </div>

        <div className="p-6 space-y-6">

          {/* College Info */}
          <div className="text-gray-700 space-y-2">
            <h3 className="font-semibold text-lg">Principal</h3>
            <p>Jashore Govt. City College, Jashore</p>
            <p>📍 Monihar Stand, Narail Road, Jashore</p>
            <p>📞 +8802477761279</p>
            <p>✉ govcitycollegejessore@gmail.com</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name here"
                  className="w-full border border-gray-300 px-3 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Add email"
                  className="w-full border border-gray-300 px-3 py-2 mt-1 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-300 px-3 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number here"
                  className="w-full border border-gray-300 px-3 py-2 mt-1 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Messages / Questions <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-300 px-3 py-2 mt-1 text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 text-sm hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>
      </div>
    </AdminLayout>
  );
};

export default ContactUs;