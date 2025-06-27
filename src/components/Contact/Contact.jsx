import { IoLocationOutline } from "react-icons/io5";
import { LuMails } from "react-icons/lu";
import { PiPhone } from "react-icons/pi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full mt-28 flex justify-between items-center gap-5 rounded-xl bg-[#333] text-white py-12 px-8"
    >
      <div className="flex-1">
        <h1 className="text-4xl text-center font-bold mb-6">Get in Touch</h1>
        <div className="flex justify-between items-center gap-8">
          <div className="w-1/2">
            <p className="text-lg mb-4">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>
            <p className="flex items-center gap-2 text-lg mb-4">
              <IoLocationOutline />
              <address>Karnaphuli, Chattogram, Bangladesh</address>
            </p>
            <p className="flex items-center gap-2 text-lg mb-4">
              <LuMails />
              <a
                href="mailto:rakibulhasan745101@gmai.com"
                className="font-semibold"
              >
                rakibulhasan745101@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-lg mb-4">
              <PiPhone />
              <a href="tel:+880175-1234567" className="font-semibold">
                +880197-3252327
              </a>
            </p>
            <p className="flex items-center justify-center gap-2.5 text-lg mb-4">
              <a
                href="https://github.com/Rakibul-Hasan-Rifat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  className="w-10 bg-white rounded-full p-1"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rakibul-hasan-a9350a1a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  className="w-10 bg-white rounded-full p-1"
                  alt=""
                />
              </a>
            </p>
          </div>
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 mb-4 rounded-md border border-gray-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 mb-4 rounded-md border border-gray-300"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 mb-4 rounded-md border border-gray-300 h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
