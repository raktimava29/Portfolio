import { siteConfig } from "../data/info";

export default function About() {
  const displaySkills = [
    ...siteConfig.skills.languages,
    ...siteConfig.skills.frameworksAndLibraries,
    ...siteConfig.skills.databasesAndDeployment,
    ...siteConfig.skills.developerTools,
    ...siteConfig.skills.csFundamentals,
  ];

  return (
    <section id="about" className="bg-black p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-100">
            About Me
          </h2>

          <div
            className="w-[75px] h-[5px] mt-2 rounded-full"
            style={{ backgroundColor: siteConfig.accentColor }}
          />
        </div>

        {/* Right */}
        <div className="lg:col-span-8 space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-400">
            {siteConfig.aboutMe}
          </p>

          <div className="pt-4">
            <div className="flex flex-wrap gap-3">
              {displaySkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-gray-200 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
