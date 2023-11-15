
import Navbar from "/src/Navbar.jsx";
// import Home from "/src/Home.jsx";
import Logos from "./Logos";
import Footer from "/src/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">

      <Navbar />
      {/* <Home /> */}
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Colorado Radon Tests</h2>
      </main>

      <Logos />
      <Footer />
    </div>
 
  )
}

export default App
