<template>
  <Layout>
    <div class="bg-content-background">
      <!-- about us -->
      <section id="about" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div class="flex flex-col md:flex-row mx-8">
            <div class="flex flex-col items-center w-2/3 md:w-1/3 my-4 md:my-0 w-auto">
              <img
                class="w-1/2 md:w-auto"
                src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&hatColor=Pink&facialHairType=BeardLight&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=DarkBrown"
              />
              <div class="flex flex-col items-center">
                <h2 class="font-medium mt-4 text-xl md:text-2xl">
                  {{ $static.metadata.author }}
                </h2>
                <p class="text-sm md:text-base">
                  I build things for the web.
                </p>
              </div>
            </div>
            <div
              class="flex-center border-t-1 md:border-t-0 border-l-0 md:border-l-1 w-auto md:w-2/3"
            >
              <p
                class="leading-relaxed text-xs md:text-base mx-auto md:mx-12 my-4 md:my-0"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- experiences -->
      <section id="experiences" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div
            class="flex relative py-6 md:py12 md:w-2/3 m-auto"
            v-for="edge in $page.allExperiences.edges"
            :key="edge.node.id"
          >
            <div class="flex-center w-18 md:w-28 h-full absolute inset-0">
              <div class="h-full w-1 bg-current pointer-events-none"></div>
            </div>
            <div
              class="flex-center flex-shrink-0 w-18 h-18 md:w-28 md:h-28 rounded-full bg-content-highlight z-1"
            >
              <div
                class="flex flex-col text-center leading-none text-xs md:text-base font-weight-500"
              >
                <span>{{ edge.node.from }}</span>
                <span>-</span>
                <span>{{ edge.node.to }}</span>
              </div>
            </div>
            <div class="flex flex-grow pl-4 md:pl-8 items-start">
              <div class="flex-grow mt-0 md:mt-6 pl-2 md:pl-8">
                <h2 class="font-medium text-base md:text-lg mb-1 ">
                  {{ edge.node.company }}
                </h2>
                <div
                  class="leading-relaxed text-xs md:text-base"
                  v-html="edge.node.content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- projects -->
      <section id="projects" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div class="text-center w-full">
            <h1 class="font-medium text-base md:text-lg mb-4">
              Some Things I’ve built
            </h1>
            <p
              class="mx-auto leading-relaxed text-xs md:text-base lg:w-2/3 mb-4"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <!-- each project -->
          <div class="flex-center flex-wrap">
            <div
              class="m-4 md:w-1/3 lg:w-1/4"
              v-for="edge in $page.allProjects.edges"
              :key="edge.node.id"
            >
              <div class="flex flex-row md:flex-col">
                <div
                  class="flex flex-col justify-start md:justify-center items-start md:items-center w-1/3 md:w-auto"
                >
                  <img
                    class="rounded-lg object-contain"
                    src="https://dummyimage.com/200x200"
                    :alt="edge.node.title"
                  />
                  <div class="flex-center space-x-2 md:space-x-4 m-4">
                    <a
                      :href="edge.node.github"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Github"
                    >
                      <GithubIcon class="icon" />
                    </a>
                    <a
                      :href="edge.node.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="edge.node.title"
                    >
                      <OpenInNewIcon class="icon" />
                    </a>
                  </div>
                </div>
                <div class="ml-4 md:ml-0 w-auto">
                  <h2 class="font-medium text-base md:text-lg">
                    {{ edge.node.title }}
                  </h2>
                  <div
                    class="mx-auto leading-relaxed text-xs md:text-base"
                    v-html="edge.node.content"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- contact section -->
      <section id="contact" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div>
            <div class="flex flex-col text-center w-full mb-4">
              <h1 class="font-medium text-base md:text-lg mb-4">
                Get in touch with me
              </h1>
              <p
                class="mx-auto leading-relaxed text-xs md:text-base lg:w-2/3 pb-8"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-xs md:text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="text-input bg-gray-50 dark:bg-gray-100"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-xs md:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="text-input bg-gray-50 dark:bg-gray-100"
                    />
                  </div>
                </div>
                <div class="p-2 pb-4 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-xs md:text-base">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      class="text-input h-32 bg-gray-50 dark:bg-gray-100"
                    >
                    </textarea>
                  </div>
                </div>
                <div class="p-2 pb-4 w-full border-b-1">
                  <button class="btn bg-content-highlight">
                    Send
                  </button>
                </div>
                <Social class="mt-4 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
  allExperiences(sortBy: "from", order: DESC) {
    edges {
      node {
        id
        company
        from
        to
        content
      }
    }
  }
  allProjects(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        url
        github
        content
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    author
  }
}
</static-query>

<script>
import GithubIcon from "vue-material-design-icons/Github"
import OpenInNewIcon from "vue-material-design-icons/OpenInNew"
import Social from "~/components/Social.vue"

export default {
  components: {
    GithubIcon,
    OpenInNewIcon,
    Social,
  },
}
</script>
