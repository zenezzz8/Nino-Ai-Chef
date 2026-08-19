import {BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header"
import Home from "./pages/chat"
import Landing from "./pages/landing"

function App() {
  const [language, setLanguage] = useState("eng");

  return (
    <BrowserRouter>
      {/* header */}
      <Header
        language={language}
        setLanguage={setLanguage}
      />

      {/* route */}
      <Routes>
        <Route path="/chat" element={<Home language={language}/>} />
        <Route path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;