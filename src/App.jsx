
import Navbar from "/src/Navbar.jsx";
import Home from "/src/Home.jsx";
import Body from "/src/Body.jsx";
import Reviews from "/src/Reviews.jsx";
import Logos from "./Logos.jsx";
import Footer from "/src/Footer.jsx";

function App() {
  return (
    <div className="text-black min-h-screen flex flex-col">

      <Navbar />
      <Home />
      <Body />
      <Reviews />
      <Logos />
      <Footer />
    </div>
 
  )
}

export default App
