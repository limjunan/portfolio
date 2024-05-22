import "./App.css";
import Landing from "./components/landing";
import Showcase from "./components/showcase";
import Contact from "./components/contact";

function App() {
  return (
    <div className="bg-black">
      <Landing />
      <Showcase />
      <Contact />
    </div>
  );
}

export default App;
