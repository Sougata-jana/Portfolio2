import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Text Content */}
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Hi, I'm <span className="text-yellow-300 typing-animation">Your Name</span>
              </h1>
              <p className="text-xl mb-8">
                A passionate Full Stack Developer specializing in building exceptional digital experiences.
                Currently focused on building responsive web applications.
              </p>
              <div className="space-x-4">
                <Link
                  to="/projects"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.img
              src="/public/hero.jpg" // Replace with the actual path to your image
              alt=""
              className="w-64 h-64 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Featured Skills Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            My Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {['React', 'Node.js', 'JavaScript', 'Python'].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}