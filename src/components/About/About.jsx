import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section
      id="about"
      className="w-full my-28 flex flex-col md:flex-row justify-between items-center gap-5 rounded-xl bg-[#333] text-white py-12 px-4 md:px-8"
    >
      <div className="w-full md:w-3/5  flex flex-col items-start gap-4">
        <h1 className="flex flex-col items-start gap-2 text-5xl md:text-7xl mb-8">
          <span>Hello, I am</span>
          <span className="bg[#4F8EF9] font-bold">Rakibul Hasan</span>
        </h1>
        <h3 className="text-4xl font-semibold mb-4 text-[#4F8EF5]">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Front-end Developer",
              "React.js Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        {/* descriptoin */}
        <p className="text-lg mb-8">
          I am a passionate MERN Stack Developer with a strong focus on building
          dynamic and responsive web applications. I have a keen eye for detail
          and a commitment to delivering high-quality code. My expertise
          includes React.js, Node.js, Express.js, and MongoDB, allowing me to
          create full-stack applications that are both efficient and
          user-friendly.
        </p>
      </div>
      <div className="order-first md:order-last">
        <img
          src="pic.png"
          alt="Rakibul Hasan"
          className="rounded-full shadow-lg object-contain"
        />
      </div>
    </section>
  );
};

export default About;
