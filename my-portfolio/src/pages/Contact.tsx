import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrblopnz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/bmw eyes.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay with subtle blue tint */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto py-20 px-6 relative z-10">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's build something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900/70 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700/50"
          >
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitError && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
                {submitError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg transition-all ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Visual Element - Inspired by E60 Angel Eyes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Angel Eyes Ring Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full border-4 border-blue-600/30 animate-pulse delay-75"></div>
                  <div className="absolute inset-8 rounded-full border-4 border-red-400/30 animate-pulse delay-100"></div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="relative bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50 mt-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Connect Directly
                </h3>
                <div className="flex justify-center gap-6">
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="mailto:tarek.jlassi.monastiri@gmail.com"
                    className="p-4 bg-gray-800/50 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-400/30 rounded-full text-white transition-all"
                  >
                    <FiMail size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://linkedin.com/in/tarek-monastiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-700 hover:border-blue-400/30 rounded-full text-white transition-all"
                  >
                    <FiLinkedin size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://github.com/TarekMestiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800/50 hover:bg-gray-500/10 border border-gray-700 hover:border-gray-400/30 rounded-full text-white transition-all"
                  >
                    <FiGithub size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}