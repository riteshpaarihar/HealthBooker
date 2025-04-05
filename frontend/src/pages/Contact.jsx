// import { useState } from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     setIsSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full"
//       >
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
//           Contact <span className="text-yellow-400">Us</span>
//         </h2>
        
//         {isSubmitted ? (
//           <div className="text-green-600 text-center text-lg font-semibold">
//             ✅ Thank you! We will get back to you soon.
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="4"
//                 placeholder="Write your message here..."
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </motion.div>

//       {/* Google Map Embed */}
//       <div className="mt-8 w-full max-w-3xl">
//         <iframe
//           title="Google Map"
//           className="w-full h-64 rounded-lg shadow-lg"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531532065!3d-37.81720974202145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d452b333333%3A0xa14f49d174fa1229!2sMelbourne!5e0!3m2!1sen!2sin!4v1649392867613!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API_URL = "https://your-backend.com/api/contact"; // 🔹 Replace with actual API

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post(API_URL, formData);
      console.log("Response:", response.data);

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("⚠️ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full"
      >
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Contact <span className="text-yellow-400">Us</span>
        </h2>

        {isSubmitted ? (
          <div className="text-green-600 text-center text-lg font-semibold p-4 bg-green-100 rounded-lg">
            ✅ Thank you! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm font-semibold bg-red-100 p-2 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>

      {/* Google Map Embed */}
      <div className="mt-8 w-full max-w-lg">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531532065!3d-37.81720974202145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d452b333333%3A0xa14f49d174fa1229!2sMelbourne!5e0!3m2!1sen!2sin!4v1649392867613!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
