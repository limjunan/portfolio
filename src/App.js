import "./App.css";
import Landing from "./components/landing";
import Showcase from "./components/showcase";
import Contact from "./components/contact";
import Footer from "./components/footer";
import About from "./components/about";

function App() {
  return (
    <div className="bg-black">
      <div>
        <Landing />
        <Showcase />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
