import { siteConfig } from "../data/info";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-100">
              {siteConfig.name}
            </h3>

            <p className="text-base text-gray-400">
              {siteConfig.title}
            </p>

            <div className="flex gap-x-6">
              {siteConfig.social?.email && (
                <FooterIcon
                  href={`mailto:${siteConfig.social.email}`}
                  label="Email"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </FooterIcon>
              )}

              {siteConfig.social?.linkedin && (
                <FooterIcon
                  href={siteConfig.social.linkedin}
                  label="LinkedIn"
                >
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                </FooterIcon>
              )}

              {siteConfig.social?.github && (
                <FooterIcon
                  href={siteConfig.social.github}
                  label="GitHub"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </FooterIcon>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:flex flex-col md:items-end gap-4">
            <nav className="flex gap-x-8">
              {["about", "projects", "experience", "education"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm text-gray-400 hover:text-[var(--accent-color)] transition-colors"
                  style={{ "--accent-color": siteConfig.accentColor }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-24 text-gray-800"
        >
          <pattern
            id="footer-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 Q 25 40, 50 50 T 100 50"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
    </footer>
  );
}

/* Small reusable icon wrapper */
function FooterIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-[var(--accent-color)] transition-colors duration-300"
      style={{ "--accent-color": siteConfig.accentColor }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        {children}
      </svg>
    </a>
  );
}
