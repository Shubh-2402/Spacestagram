import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { SatelliteAlt, LightMode, DarkMode } from "@mui/icons-material";
import Toggle from "react-toggle";
import "./Navbar.css";
import "react-toggle/style.css";

function Navbar() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div
      className="navbar"
      style={{
        borderBottom: `1px solid ${theme.color}`,
      }}
    >
      <SatelliteAlt sx={{ color: theme.color }}></SatelliteAlt>
      <h1>Spacestagram</h1>
      <div className="toggleContainer">
        <DarkMode />
        <Toggle
          className="toggle"
          defaultChecked={!isDark}
          icons={false}
          onChange={toggleTheme}
        />
        <LightMode />
      </div>
    </div>
  );
}

export default Navbar;
