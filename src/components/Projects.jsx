import { siteConfig } from "../data/info";

export default function Projects() {
  return (
    <section id="projects" className="bg-black p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-100">
            Projects
          </h2>

          <div
            className="w-[75px] h-[5px] mt-2 rounded-full"
            style={{ backgroundColor: siteConfig.accentColor }}
          />
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-8">
            {siteConfig.projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-4 sm:p-6 md:p-8 bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-800 transition-all duration-300 hover:shadow-xl hover:border-gray-700"
              >
                <div className="space-y-2">
                  <span
                    className="text-sm font-mono"
                    style={{ color: siteConfig.accentColor }}
                  >
                    0{index + 1}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100">
                    {project.name}
                  </h3>
                </div>

                <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {project.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.techStack.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-gray-200 rounded-full text-sm sm:text-base font-medium hover:bg-gray-700 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white px-4 py-2 rounded-md transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                      style={{ backgroundColor: siteConfig.accentColor }}
                    >
                      Live Demo
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </a>
                  )}

                  {project.repo_link && (
                    <a
                      href={project.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-medium px-4 py-2 rounded-md border border-gray-300 text-gray-100 transition-all duration-300 hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                       style={{
    backgroundColor: "#C2C8CC",   // light gray (default)
    borderColor: "#ffffff40",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#E0DEDE"; // darker gray
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#C2C8CC"; // back to light
  }}
                    >
                      GitHub
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
