import Header from "./compenents/Header";
import MainContent from "./compenents/MainContent";
import Footer from "./compenents/Footer";
import Menu from "./compenents/Menu";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Menu />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;