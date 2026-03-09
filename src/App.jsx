import { useState, useEffect } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("home");

  useEffect(() => {
    if (darkMode) {
      document.body.className = "dark";
    } else {
      document.body.className = "light";
    }
  }, [darkMode]);

  return (
    <div className="container">

      <h1>Social Media Dashboard</h1>

     
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <br /><br />

     
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("notifications")}>Notifications</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      </nav>

      <br />

  
      {page === "home" && <Home />}
      {page === "notifications" && <Notifications />}
      {page === "profile" && <Profile />}

    </div>
  );
}

export default App;