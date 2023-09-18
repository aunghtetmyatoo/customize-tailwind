import Sidebar from "./components/Sidebar/Index";
import "./style.css";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full h-screen bg-gray-800"></main>
    </div>
  );
}

export default App;
