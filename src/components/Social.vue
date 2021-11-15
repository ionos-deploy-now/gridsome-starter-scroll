<template>
  <aside class="flex-center space-x-2 md:space-x-4">
    <a
      :href="$static.metadata.github"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <GithubIcon class="icon-md md:icon-lg" />
    </a>
    <a
      :href="$static.metadata.linkedin"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <LinkedinIcon class="icon-md md:icon-lg" />
    </a>
  </aside>
</template>

<static-query>
query {
  metadata {
    github
    linkedin
  }
}
</static-query>

<script>
import GithubIcon from "vue-material-design-icons/Github"
import LinkedinIcon from "vue-material-design-icons/Linkedin"

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
  },
}
</script>
