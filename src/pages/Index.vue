<template>
  <Layout>
    <div>
      <!-- about us -->
      <section id="about" class="h-screen bg-content-color">
        <div class="container mx-auto h-full border-b-4">
          <div class="flex flex-col">
            <div class="flex flex-col sm:flex-row md:mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="relative">
                  <div
                    class="flex flex-row md:flex-col items-center inset-0 w-full"
                  >
                    <img
                      class="w-1/2 md:w-auto"
                      src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&hatColor=Pink&facialHairType=BeardLight&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=DarkBrown"
                    />
                    <div class="flex flex-col items-center w-1/2 md:w-auto">
                      <h2
                        class="font-medium title-font mt-4 text-xl md:text-2xl"
                      >
                        {{ $static.metadata.author }}
                      </h2>
                      <div class="w-3/4 h-1 rounded my-4 w-full"></div>
                      <p class="text-base md:text-lg">
                        I build things for the web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="sm:w-1/2 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
              >
                <p class="leading-relaxed text-xs md:text-base mx-auto w-2/3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- experiences -->
      <section id="experiences" class="h-screen bg-content-color">
        <div class="flex-center flex-col container mx-auto h-full border-b-4">
          <div
            class="flex relative py-6 md:py12 md:w-2/3 mx-auto"
            v-for="edge in $page.allExperiences.edges"
            :key="edge.node.id"
          >
            <div
              class="flex-center w-18 md:w-28 h-full absolute inset-0"
            >
              <div class="h-full w-1 bg-current pointer-events-none"></div>
            </div>
            <div
              class="flex-center flex-shrink-0 w-18 h-18 md:w-28 md:h-28 rounded-full bg-content-highlight z-1"
            >
              <div
                class="flex flex-col text-center leading-none text-xs md:text-base"
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
      <section id="projects" class="h-screen bg-content-color">
        <div class="flex-center flex-col container mx-auto h-full border-b-4">
          <div class="text-center w-full">
            <h1 class="font-medium text-base md:text-lg m-4">
              Some Things I’ve built
            </h1>
            <p class="mx-auto leading-relaxed text-xs md:text-base lg:w-2/3 m-4">
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
              <div class="flex flex-row md:flex-col text-center">
                <div
                  class="flex flex-col justify-start md:justify-center items-start md:items-center w-2/3 md:w-auto"
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
                      <GithubIcon class="icon md:icon-md" />
                    </a>
                    <a
                      :href="edge.node.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="edge.node.title"
                    >
                      <OpenInNewIcon class="icon md:icon-md" />
                    </a>
                  </div>
                </div>
                <div class="w-auto">
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

      <section id="contact" class="h-screen bg-content-color">
        <div class="container mx-auto h-full flex-center">
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
                    <label for="name" class="leading-7 text-xs md:text-base"
                      >Name</label
                    >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-content-highlight focus:bg-white focus:ring-2 focus:border-content-highlight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-xs md:text-base"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-content-highlight focus:bg-white focus:ring-2 focus:border-content-highlight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 pb-4 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-xs md:text-base"
                      >Message</label
                    >
                    <textarea
                      id="message"
                      name="message"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-content-highlight focus:bg-white focus:ring-2 focus:border-content-highlight h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 pb-4 w-full border-b-1">
                  <button
                    class="flex mx-auto border-0 py-2 px-8 rounded text-base md:text-lg text-white bg-content-highlight focus:outline-none hover:opacity-80"
                  >
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
