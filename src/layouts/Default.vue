<template>
  <div class="layout">
    <header class="sticky top-0 left-0 z-10 w-full">
      <div
        class="flex flex-rows items-center px-16 py-4 md:px-32 bg-light-blue-800"
      >
        <strong class="text-3xl text-light-300">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <span class="flex-auto"></span>
        <scrollactive ref="scrollactive" :offset="offset">
          <ul class="flex flex-rows items-center space-x-4 text-2xl">
            <li>
              <a href="#about" class="scrollactive-item">
                about
              </a>
            </li>
            <li>
              <a href="#experience" class="scrollactive-item">
                experience
              </a>
            </li>
            <li>
              <a href="#work" class="scrollactive-item">
                work
              </a>
            </li>
            <li>
              <a href="#contact" class="scrollactive-item">
                contact
              </a>
            </li>
          </ul>
        </scrollactive>
      </div>
    </header>
    <main class="mx-auto px-16 md:px-32 bg-gray-50">
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

<style>
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>

<script>
export default {
  data: function() {
    return {
      offset: 84,
    }
  },
}
</script>
