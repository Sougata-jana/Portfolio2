import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'JavaScript', level: '85%' },
    { name: 'React', level: '80%' },
    { name: 'HTML/CSS', level: '90%' },
    { name: 'Node.js', level: '75%' },
    { name: 'Python', level: '70%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Your Name</span> 👋
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A passionate developer crafting beautiful digital experiences
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-900">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-gray-600 mb-4">
          I'm a new developer with a passion for creating beautiful and functional web applications. 
          My journey in tech started with [your story here]. I love learning new technologies and 
          solving complex problems.
        </p>
        <p className="text-gray-600">
          When I'm not coding, you can find me [your hobbies/interests]. I believe in continuous 
          learning and sharing knowledge with the developer community.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">{skill.name}</span>
                <span className="text-gray-500">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="bg-blue-600 h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fun Facts Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">🎯 Current Goal</h3>
            <p className="text-gray-600">Learning [specific technology/framework]</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">💻 Favorite Editor</h3>
            <p className="text-gray-600">VS Code with [your favorite extensions]</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">🎮 Hobbies</h3>
            <p className="text-gray-600">[Your hobbies]</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">🌟 Dream Project</h3>
            <p className="text-gray-600">[Describe your dream project]</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}