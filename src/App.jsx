import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
// import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import { useEffect } from "react";
import InstallAndroid from "./components/InstallAndroid";

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    console.log("✅ beforeinstallprompt fired");
    alert("PWA INSTALL AVAILABLE");
    window.deferredPrompt = e;
  });
}, []);

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <Navigation /> */}
      </div>

      <main className="max-w-6xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </main>
      <InstallAndroid />
    </BrowserRouter>
  );
}
