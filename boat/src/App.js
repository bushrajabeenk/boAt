import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
