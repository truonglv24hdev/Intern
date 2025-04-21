import "./App.css";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Header from "./components/header";
import MobileContactBar from "./components/MobileContactBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <MobileContactBar />
    </div>
  );
}

export default App;
