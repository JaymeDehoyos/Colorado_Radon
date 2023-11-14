import NavBar from './Navbar.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <NavBar />

      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Colorado Radon Testing</h2>
      </main>




      <footer className="container mx-auto p-6 flex-col me:flex-row items-center justify-between">
        <p>Built by Jayme DeHoyos</p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Home</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a>
        </div>
      </footer>
    </div>
 
  )
}

export default App
