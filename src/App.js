import { BrowserRouter } from "react-router-dom";
import Navbar from "./Modules/Navbar/Navbar";
import PrimaryRoutes from "./routes/PrimaryRoutes";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <BrowserRouter>
        <Navbar></Navbar>
        <PrimaryRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
