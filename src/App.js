import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;

{
  /* <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
      <button type="button" c>
        Toggle theme
      </button> */
}
