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
          background: "var(--color-header-background)",
          color: "var(--color-header-color)",
          highlight: "var(--color-header-highlight)",
        }, 
        content: {
          background: "var(--color-content-background)",
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
