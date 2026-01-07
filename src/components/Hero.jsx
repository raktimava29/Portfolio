import { siteConfig } from "../data/info";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative isolate overflow-hidden bg-white py-24 md:h-screen"
      style={{ "--accent-color": siteConfig.accentColor }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(
            ellipse 800px 1200px at 0% 0%,
            ${siteConfig.accentColor}40 0%,
            ${siteConfig.accentColor}25 20%,
            ${siteConfig.accentColor}10 40%,
            rgba(255, 255, 255, 0.3) 70%,
            rgba(255, 255, 255, 0.8) 90%,
            white 100%
          )`,
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="grid-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>

          <pattern
            id="programming-symbols"
            x="0"
            y="0"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            {[
              { x: 50, y: 50, r: -15, t: "</>" },
              { x: 150, y: 100, r: 10, t: "{}" },
              { x: 250, y: 80, r: -5, t: "=>" },
              { x: 100, y: 200, r: 15, t: "[]" },
              { x: 300, y: 180, r: -10, t: "<>" },
              { x: 200, y: 250, r: 5, t: "()" },
              { x: 50, y: 320, r: -8, t: "::" },
              { x: 350, y: 300, r: 12, t: "==" },
              { x: 150, y: 350, r: -15, t: "++" },
              { x: 250, y: 370, r: 8, t: ";" },
            ].map((s, i) => (
              <text
                key={i}
                x={s.x}
                y={s.y}
                fill={siteConfig.accentColor}
                fontFamily="monospace"
                fontSize="20"
                transform={`rotate(${s.r})`}
              >
                {s.t}
              </text>
            ))}
          </pattern>
        </defs>

        <rect
          fill="url(#programming-symbols)"
          width="100%"
          height="100%"
          opacity="0.2"
        />
        <rect
          fill="url(#grid-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center">
        <div>
          <h2 className="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 animate-fade-in">
            Hello! 👋
          </h2>

          <h1 className="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 animate-fade-in animation-delay-200">
            I&apos;m{" "}
            <span style={{ color: siteConfig.accentColor }}>
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 animate-fade-in animation-delay-400">
            {siteConfig.title}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in animation-delay-600">
        {siteConfig.social?.email && (
          <a
            href={`mailto:${siteConfig.social.email}`}
            aria-label="Email"
            className="transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
          </a>
        )}

        {siteConfig.social?.linkedin && (
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
          </a>
        )}

        {siteConfig.social?.twitter && (
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
          </a>
        )}

        {siteConfig.social?.github && (
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
          </a>
        )}
      </div>
    </div>
  );
}
