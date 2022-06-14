import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      <AllRoutes />
    </div>
  );
}

export default App;
