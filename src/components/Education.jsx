import { siteConfig } from "../data/info";

export default function Education() {
  return (
    <div id="education" className="bg-black p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-100">
            Education
          </h2>

          <div
            className="w-[75px] h-[5px] mt-2 rounded-full"
            style={{ backgroundColor: siteConfig.accentColor }}
          />
        </div>

        <div className="lg:col-span-8 space-y-8">
          {siteConfig.education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-5 md:p-6 transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
                    {edu.degree}
                  </h3>
                  <p
                    className="text-base sm:text-lg"
                    style={{ color: siteConfig.accentColor }}
                  >
                    {edu.institution}
                  </p>
                </div>

                <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
                  {edu.period}
                </span>
              </div>

              {edu.cgpa && (
                <p className="text-sm sm:text-base text-gray-400">
                  CGPA: <span className="font-medium">{edu.cgpa}</span>
                </p>
              )}
            </div>
          ))}

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-5 md:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">
              Certifications
            </h3>

            <ul className="space-y-2">
              {siteConfig.certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 mr-3 flex-shrink-0" />
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-400 hover:text-[var(--accent-color)] transition-colors"
                    style={{ "--accent-color": siteConfig.accentColor }}
                  >
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-5 md:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">
              Achievements
            </h3>

            <ul className="space-y-2">
              {siteConfig.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-400">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
