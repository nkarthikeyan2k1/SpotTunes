import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Template from "./Pages/Template";
// https://api.spotify.com/v1/search
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/spot-tunes" replace />} />
          <Route path="/spot-tunes" element={<Template />}>
            <Route path="" element={<Navigate to="for-you" replace />} />
            <Route path="for-you" element={<div>for you!</div>} />
            <Route path="top-tracks" element={<div>top!</div>} />
            <Route path="favourites" element={<div>favourites!</div>} />
            <Route path="recentlt-played" element={<div>recentlt!</div>} />
          </Route>
          <Route path="*" element={<Navigate to="/spot-tunes" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
