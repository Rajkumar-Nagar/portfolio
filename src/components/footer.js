import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Rajkumar Nagar</h3>
                    <p className="text-sm mb-4">
                        Full Stack Developer with startup experience. Strong background in competitive programming and problem-solving, with proven leadership in technical teams.
                    </p>
                    <a href="mailto:2021uce1514@mnit.ac.in" className="flex items-center text-sm">
                        <div className="bg-green-500 rounded-full p-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1a3 3 0 013-3h4a3 3 0 013 3z"
                                />
                            </svg>
                        </div>
                        2021uce1514@mnit.ac.in
                    </a>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
                        <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
                        <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Link</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:text-gray-400">Terms of Use</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Social Media</h4>
                    <div className="flex space-x-4">
                        <a href="https://github.com/Rajkumar-Nagar" target="_blank" rel="noopener noreferrer">
                            <img src="path-to-github-icon.png" alt="GitHub" className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/rajkumarnagar/" target="_blank" rel="noopener noreferrer">
                            <img src="path-to-linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com/rajkumarnagar" target="_blank" rel="noopener noreferrer">
                            <img src="path-to-twitter-icon.png" alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="https://code-with-raj.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src="path-to-website-icon.png" alt="Website" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-sm border-t border-gray-800 pt-4">
                &copy; 2024 All rights reserved - Rajkumar Nagar
            </div>
        </footer>
    );
};

export default Footer;
