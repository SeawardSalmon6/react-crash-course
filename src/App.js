import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups/index.js";
import FavoritesPage from "./pages/Favorites/index.js";
import NewMeetupPage from "./pages/NewMeetup/index.js";
import MainNavigation from "./components/layout/MainNavigation/index.js";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
