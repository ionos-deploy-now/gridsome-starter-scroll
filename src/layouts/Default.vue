<template>
  <div class="layout">
    <header class="nav is-fixed sticky top-0 left-0 z-10 w-full">
      <div class="flex-center flex-rows px-16 py-4 md:px-32 bg-header-background">
        <div class="text-3xl text-header-color">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </div>
        <span class="flex-auto"></span>
        <scrollactive
          ref="scrollactive"
          :offset="offset"
          highlight-first-item
          >
          <ul class="flex-center flex-rows space-x-4 text-2xl">
            <li>
              <a href="#about" class="scrollactive-item text-header-color">
                about
              </a>
            </li>
            <li>
              <a href="#experience" class="scrollactive-item text-header-color">
                experience
              </a>
            </li>
            <li>
              <a href="#work" class="scrollactive-item text-header-color">
                work
              </a>
            </li>
            <li>
              <a href="#contact" class="scrollactive-item text-header-color">
                contact
              </a>
            </li>
          </ul>
        </scrollactive>
        <ToggleTheme class="pl-4" />
      </div>
    </header>
    <main class="mx-auto px-16 md:px-32 bg-scenery">
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
import ToggleTheme from "~/components/ToggleTheme"

export default {
  components: {
    ToggleTheme,
  },
  data: function() {
    return {
      offset: 84,
    }
  },
}
</script>
