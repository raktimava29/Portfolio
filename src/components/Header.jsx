import { useEffect } from "react";
import { siteConfig } from "../data/info";

export default function Header() {
  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;

      if (window.scrollY > 100) {
        header.classList.add("bg-black/70", "backdrop-blur-sm");
      } else {
        header.classList.remove("bg-black/70", "backdrop-blur-sm");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300"
    >
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <ul className="flex items-center gap-8 justify-center">
          {["about", "projects", "education"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-gray-300 hover:text-[var(--accent-color)] transition-colors font-medium"
                style={{ "--accent-color": siteConfig.accentColor }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
