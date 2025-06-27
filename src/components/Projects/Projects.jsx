import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data.projects);
        console.log(data.projects);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section
      id="projects"
      className="mt-28 w-full mx-auto px-4 py-12 bg-[#333] rounded-xl"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.clientCode}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Code
                </a>

                {project.serverCode && (
                  <a
                    href={project.serverCode}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Server Code
                  </a>
                )}

                <a
                  href={project.liveLink}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
