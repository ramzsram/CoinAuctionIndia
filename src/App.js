import './App.css';
import LoginPage from "./LoginPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuctionItemsPage from "./pages/AuctionItemsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/auction-items" element={<AuctionItemsPage />} />
    </Routes>
  )
}

export default App;
