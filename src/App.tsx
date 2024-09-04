import Navbar from "./components/topbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import './App.css';

function App() {

  return (
    <>
    <Navbar />
    <div className="container">
      <Sidebar />
      <Home />
    </div>
    </>
  )
}

export default App
