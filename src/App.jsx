import { useState } from "react";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
