<template>
  <aside class="flex space-x-4 justify-center items-center mx-auto my-4">
    <a
      :href="$static.metadata.github"
      class="p-2"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <GithubIcon class="icon-md" />
    </a>
    <a
      :href="$static.metadata.linkedin"
      class="p-2"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <LinkedinIcon class="icon-md" />
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
