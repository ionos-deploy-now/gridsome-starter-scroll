<template>
  <div class="layout">
    <header
      class="flex flex-col md:flex-row md:items-center nav is-fixed sticky top-0 left-0 z-10 flex px-2 md:px-24 py-4 md:py-6 space-x-2 md:space-x-4 bg-header-background"
    >
      <div class="flex flex-row items-center">
        <!-- mobile button only -->
        <button class="md:hidden focus:outline-none" @click="toggle">
          <menu-icon class="icon-md" fillColor="var(--color-header-color)" />
        </button>
        <div
          class="flex flex-grow flex-nowrap justify-center md:justify-start text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-header-color"
        >
          <g-link class="whitespace-nowrap" to="/">{{
            $static.metadata.siteName
          }}</g-link>
        </div>
        <!-- mobile button only -->
        <ToggleTheme class="md:hidden focus:outline-none" />
      </div>
      <div :class="open ? 'block' : 'hidden md:block'" class="flex-grow">
        <scrollactive ref="scrollactive" :offset="offset" highlight-first-item>
          <ul
            class="flex flex-col md:flex-row md:justify-center md:space-x-4 text-md md:text-xl lg:text-2xl"
          >
            <li>
              <a
                href="#about"
                class="scrollactive-item text-header-color sm:inline-block sm:mt-0"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                class="scrollactive-item text-header-color sm:inline-block sm:mt-0"
              >
                experiences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="scrollactive-item text-header-color sm:inline-block sm:mt-0"
              >
                projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="scrollactive-item text-header-color sm:inline-block sm:mt-0"
              >
                contact
              </a>
            </li>
          </ul>
        </scrollactive>
      </div>
      <!-- desktop button only -->
      <ToggleTheme class="hidden md:block focus:outline-none" />
    </header>
    <main class="mx-auto px-0 md:px-24 bg-scenery">
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MenuIcon from "vue-material-design-icons/Menu"
import ToggleTheme from "~/components/ToggleTheme"

export default {
  components: {
    MenuIcon,
    ToggleTheme,
  },
  data: function() {
    return {
      offset: 84,
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
