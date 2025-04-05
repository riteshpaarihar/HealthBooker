import { useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaUserMd, FaCheckCircle, FaHospital, FaCalendarCheck, FaHeartbeat } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image: "https://images.pexels.com/photos/7585023/pexels-photo-7585023.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Expert Healthcare Services",
    description: "Providing top-tier healthcare services with experienced professionals."
  },
  {
    image: "https://images.pexels.com/photos/4421546/pexels-photo-4421546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Advanced Medical Facilities",
    description: "Equipped with the latest technology for accurate diagnosis and treatment."
  },
  {
    image: "https://images.pexels.com/photos/30686717/pexels-photo-30686717/free-photo-of-surgeon-performing-procedure-in-operating-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Comprehensive Patient Care",
    description: "We ensure patient-centric healthcare with compassion and expertise."
  }
];

const Home = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section with Slider */}
      <div className="relative w-full h-[500px] mt-2">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[500px]">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl font-bold"
                >
                  {slide.title}
                </motion.h1>
                <p className="mt-2 text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 mt-2 py-16 flex flex-col md:flex-row items-center gap-12">
        <img
          src="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Doctor"
          className="w-full md:w-[25%] rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">About HealthBooker</h2>
          <p className="mt-4 text-gray-600">
            HealthBooker is a revolutionary healthcare platform dedicated to providing 
            accessible, high-quality medical services to patients worldwide.
          </p>
          <ul className="mt-4 text-gray-700 list-disc pl-6">
            <li>24/7 Online Doctor Consultations</li>
            <li>AI-Powered Health Diagnosis</li>
            <li>Appointment Booking with Specialists</li>
            <li>Secure and Private Health Records</li>
            <li>Easy Access to Medical Reports</li>
            <li>Personalized Health Tips and Guidance</li>
          </ul>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto w-4/5 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center bg-blue-100 p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-blue-600 text-4xl" />
            <h3 className="text-2xl font-bold mt-2">1000+</h3>
            <p className="text-gray-700">Satisfied Patients</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-blue-100 p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <FaCheckCircle className="text-green-600 text-4xl" />
            <h3 className="text-2xl font-bold mt-2">250+</h3>
            <p className="text-gray-700">Verified Doctors</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-blue-100 p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserMd className="text-red-600 text-4xl" />
            <h3 className="text-2xl font-bold mt-2">75+</h3>
            <p className="text-gray-700">Specialist Doctors</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
