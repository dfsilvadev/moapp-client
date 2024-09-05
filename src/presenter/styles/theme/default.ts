const theme = {
  grid: {
    container: {
      content: "75rem", // 1200px
      "full-vw": "100vw",
      "full-vh": "100vh",
    },
  },

  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      thin: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    size: {
      xxs: "0.75rem", // 12px
      xs: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.5rem", // 24px
      xlg: "2", // 36px
    },
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out",
  },

  colors: {
    brand: {
      pink: "#F9769D",
      blue: "#96A7FF",
    },

    gray: {
      50: "#F1F3F5",
      400: "#797D9A",
      800: "#21222D",
      900: "#171821",
    },

    green: {
      100: "#50B2C0",
      200: "#255D6A",
      300: "#0A313C",
    },

    red: {
      500: "#E83F5B",
    },

    yellow: {
      500: "#FFC727",
    },

    gradient: {
      horizontal:
        "linear-gradient(90deg, rgba(58,44,58,1) 0%, rgba(47,40,52,1) 46%, rgba(33,34,45,1) 100%)",
    },

    white: "#FFFFFF",
  },
} as const

export default theme
