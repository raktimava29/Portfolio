import { siteConfig } from "../data/info";

export default function About() {
  const skillGroups = siteConfig.skills;

  return (
    <div id="about" className="bg-black p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-100">
            About Me
          </h2>

          <div
            className="w-[75px] h-[5px] mt-2 rounded-full"
            style={{ backgroundColor: siteConfig.accentColor }}
          />
        </div>

        <div className="lg:col-span-8 space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-400">
            {siteConfig.aboutMe}
          </p>

          <div className="pt-4 space-y-6">
            {Object.entries(skillGroups).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-gray-300 text-sm sm:text-base md:text-lg font-semibold mb-2 capitalize">
                  {category.replace(/([A-Z])/g, " $1")}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-gray-200 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
