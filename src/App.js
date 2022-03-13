import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups/index.js";
import FavoritesPage from "./pages/Favorites/index.js";
import NewMeetupPage from "./pages/NewMeetup/index.js";
import Layout from "./components/Layout/index.js";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
