const Footer = () => {
  return (
    <footer className="mt-28">
      {/* give me a footer which will contain links and necessary things a portfolio website contains */}
      <div className="bg-[#333] text-white py-8 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-center mb-4">
            © {new Date().getFullYear()} Rakibul Hasan. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href=""
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href=""
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href=""
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
