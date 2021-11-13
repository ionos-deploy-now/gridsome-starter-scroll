<template>
  <button @click="handleClick">
    <ThemeLightDarkIcon class="icon-md" fillColor="var(--color-header-color)" />
  </button>
</template>

<script>
import ThemeLightDarkIcon from "vue-material-design-icons/ThemeLightDark"

export const DARK_MODE = "dark"

export default {
  components: {
    ThemeLightDarkIcon,
  },

  data() {
    return {
      isDarkMode: false,
    }
  },

  methods: {
    handleClick() {
      const hasDarkMode = document.documentElement.classList.contains(DARK_MODE)
      return this.toggleTheme(!hasDarkMode)
    },

    toggleTheme(mode) {
      document.documentElement.classList.toggle(DARK_MODE, mode)
      this.isDarkMode = mode
      this.writeToStorage(mode)
      return mode
    },

    detectPreferred() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    },

    hasInStorage() {
      return localStorage.getItem(DARK_MODE) !== null
    },

    getFromStorage() {
      return localStorage.getItem(DARK_MODE) === "true"
    },

    writeToStorage(prefersDark) {
      localStorage.setItem(DARK_MODE, prefersDark ? "true" : "false")
    },
  },

  mounted() {
    if (this.hasInStorage()) {
      this.toggleTheme(this.getFromStorage())
    } else if (process.isClient && window.matchMedia) {
      this.toggleTheme(this.detectPreferred())
    }
  },
}
</script>
