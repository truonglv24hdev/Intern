import "./App.css";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Header from "./components/header";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
