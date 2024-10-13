import React, { useState, useEffect } from "react";

const themes = [
  {
    name: "Fresh and Bright",
    styles: {
      "--primary-color": "#a8d5ba",
      "--secondary-color": "#f9ebae",
      "--accent-color": "#ff6f61",
      "--background-color": "#f4f4f4",
      "--text-color": "#333",
    },
  },
  {
    name: "Ocean Breeze",
    styles: {
      "--primary-color": "#0096c7",
      "--secondary-color": "#90e0ef",
      "--accent-color": "#00b4d8",
      "--background-color": "#f0f9ff",
      "--text-color": "#03045e",
    },
  },
  {
    name: "Sunset",
    styles: {
      "--primary-color": "#ff6f61",
      "--secondary-color": "#ffccbc",
      "--accent-color": "#d32f2f",
      "--background-color": "#ffe0b2",
      "--text-color": "#4e342e",
    },
  },
  {
    name: "Ocean",
    styles: {
      "--primary-color": "#0077be",
      "--secondary-color": "#00bcd4",
      "--accent-color": "#009688",
      "--background-color": "#e0f7fa",
      "--text-color": "#004d40",
    },
  },
  {
    name: "Forest",
    styles: {
      "--primary-color": "#3b7a57",
      "--secondary-color": "#6fb98f",
      "--accent-color": "#2b5d38",
      "--background-color": "#e8f5e9",
      "--text-color": "#3e3e3e",
    },
  },
  {
    name: "Warm Sunset",
    styles: {
      "--primary-color": "#ff6f20",
      "--secondary-color": "#ffb74d",
      "--accent-color": "#d84315",
      "--background-color": "#fff3e0",
      "--text-color": "#3e2723",
    },
  },
  {
    name: "Earthy",
    styles: {
      "--primary-color": "#556b2f",
      "--secondary-color": "#d2b48c",
      "--accent-color": "#e27d60",
      "--background-color": "#faf3e0",
      "--text-color": "#3e2723",
    },
  },
  {
    name: "Modern and Minimal",
    styles: {
      "--primary-color": "#4a4a4a",
      "--secondary-color": "#ffffff",
      "--accent-color": "#1abc9c",
      "--background-color": "#f0f0f0",
      "--text-color": "#3e2723",
    },
  },
  {
    name: "Warm and Cozy",
    styles: {
      "--primary-color": "#ede6d4",
      "--secondary-color": "#bf4d4d",
      "--accent-color": "#f6b93b",
      "--background-color": "#fff8e1",
      "--text-color": "#333",
    },
  },
  {
    name: "Bright and Cheerful",
    styles: {
      "--primary-color": "#87ceeb",
      "--secondary-color": "#ffd700",
      "--accent-color": "#ff3e30",
      "--background-color": "#f5f5f5",
      "--text-color": "#3e2723",
    },
  },
  {
    name: "Elegant and Classy",
    styles: {
      "--primary-color": "#9b1b30",
      "--secondary-color": "#f7e7ce",
      "--accent-color": "#ffd700",
      "--background-color": "#faf0e6",
      "--text-color": "#3e2723",
    },
  },
];

const ThemeSwitcher = () => {
  // Component to switch between different themes
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    // Check local storage for saved theme index
    const savedTheme = localStorage.getItem("themeIndex");
    if (savedTheme) {
      setCurrentTheme(Number(savedTheme));
      applyTheme(Number(savedTheme)); // Apply saved theme styles
    }
  }, []);

  const applyTheme = (themeIndex) => {
    const theme = themes[themeIndex];
    Object.entries(theme.styles).forEach(([key, value]) => {
      // Apply the new theme styles to the document root element
      document.documentElement.style.setProperty(key, value);
    });
  };

  const handleThemeChange = () => {
    // Switch to the next theme
    const newThemeIndex = (currentTheme + 1) % themes.length;
    setCurrentTheme(newThemeIndex);
    localStorage.setItem("themeIndex", newThemeIndex); // Save the current theme index
    applyTheme(newThemeIndex); // Apply new theme styles
  };

  return (
    <div
      className="ThemeSwitcher"
      style={{ cursor: "pointer", marginRight: "20px" }}
      onClick={handleThemeChange}
    >
      {themes[currentTheme].name}
    </div>
  );
};

export default ThemeSwitcher;
