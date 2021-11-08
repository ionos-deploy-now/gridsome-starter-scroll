export default {
  theme: {
    fontFamily: {
      sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      headline: [
        "Overpass",
        "Open Sans",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
      mono: ["Overpass Mono", "monospace"],
    },
    extend: {
      screens: {
        xxl: "1400px",
      },
      colors: {
        header: {
          color: "var(--color-header-color)",
          background: "var(--color-header-background)",
          highlight: "var(--color-header-highlight)",
        }, 
        content: {
          color: "var(--color-content-color)",
          highlight: "var(--color-content-highlight)",
        },
        scenery: "var(--color-scenery)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  scan: {
    dirs: ["./"],
    exclude: ["node_modules", ".git", "dist", ".cache", ".temp"],
  },
  preflight: {
    alias: {
      // add gridsome aliases
      "g-link": "a",
      "g-image": "img",
    },
  },
}
