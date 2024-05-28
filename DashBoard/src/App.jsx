import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LeaderBoard from "./pages/LeaderBoard";
import Scanner from "./pages/Scanner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LeaderBoard />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </>
  );
}

export default App;
