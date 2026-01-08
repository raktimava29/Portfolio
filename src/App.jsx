import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Projects/>
      <Education/>
      <Footer />
    </>
  );
}
