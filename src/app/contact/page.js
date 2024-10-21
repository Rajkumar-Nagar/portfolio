import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-16">
      <h2 className="text-4xl font-bold mb-4 text-teal-400">Contact</h2>
      <p className="text-md text-gray-400 mb-8">
        I’m currently available for freelance work
      </p>
      <button className="border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-full mb-12 hover:bg-teal-400 hover:text-gray-900 transition duration-300">
        Send Me A Message
      </button>

      <form className="w-full max-w-4xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-teal-400 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Your name *
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-200 border-b border-teal-400 py-3 px-4 leading-tight focus:outline-none focus:border-teal-300"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-teal-400 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Your email *
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-200 border-b border-teal-400 py-3 px-4 leading-tight focus:outline-none focus:border-teal-300"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-teal-400 text-xs font-bold mb-2"
            htmlFor="message"
          >
            Your message *
          </label>
          <textarea
            className="appearance-none block w-full bg-transparent text-gray-200 border-b border-teal-400 py-3 px-4 leading-tight focus:outline-none focus:border-teal-300"
            id="message"
            placeholder="Enter your needs"
            rows="4"
          ></textarea>
        </div>
        <div className="w-full px-3 flex justify-center mt-8">
          <button
            type="submit"
            className="bg-teal-400 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-teal-500 transition duration-300"
          >
            Send Message <span>🚀</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
