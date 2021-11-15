<template>
  <Layout>
    <div>
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
                      <div
                        class="w-3/4 h-1 rounded my-4 w-full"
                      ></div>
                      <p class="text-md md:text-xl">
                        I build things for the web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
              >
                <p class="leading-relaxed text-md md:text-xl mb-4">
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

      <section id="experience" class="h-screen bg-content-color">
        <!-- TODO - fix mobile view -->
        <div class="container mx-auto h-full flex-center border-b-4">
          <div>
            <div
              class="flex relative py-10 md:w-2/3 mx-auto"
              v-for="edge in $page.allExperiences.edges"
              :key="edge.node.id"
            >
              <div
                class="w-12 md:w-24 h-full absolute inset-0 flex items-center justify-center"
              >
                <div
                  class="h-full w-1 bg-current pointer-events-none"
                ></div>
              </div>
              <div
                class="flex-shrink-0 w-12 md:w-24 h-24 rounded-full inline-flex items-center justify-center bg-amber-500 z-1"
              >
                <div class="flex flex-col text-center leading-none">
                  <span>{{ edge.node.from }}</span>
                  <span>-</span>
                  <span>{{ edge.node.to }}</span>
                </div>
              </div>
              <div
                class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              >
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font mb-1 text-xl">
                    {{ edge.node.company }}
                  </h2>
                  <div class="leading-relaxed" v-html="edge.node.content" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="h-screen bg-content-color">
        <!-- TODO - fix mobile view -->
        <div class="container mx-auto h-full flex-center border-b-4">
          <div>
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="text-4xl font-medium title-font">
                Some Things I’ve built
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>

            <div class="flex-center flex-wrap">
              <div
                class="p-4 md:w-1/2 lg:w-1/4"
                v-for="edge in $page.allProjects.edges"
                :key="edge.node.id"
              >
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://dummyimage.com/200x200"
                  />
                  <div class="w-full">
                    <div class="flex-center">
                      <div
                        class="flex space-x-4 justify-center items-center mx-auto pb-4"
                      >
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
                    <h2 class="title-font font-medium text-lg">
                      {{ edge.node.title }}
                    </h2>
                    <div class="mb-4" v-html="edge.node.content" />
                  </div>
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
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">
                Get in touch with me
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base pb-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-sm"
                      >Message</label
                    >
                    <textarea
                      id="message"
                      name="message"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full pb-12 border-b-1">
                  <button
                    class="flex mx-auto border-0 py-2 px-8 rounded text-lg text-white bg-content-highlight focus:outline-none hover:opacity-80"
                  >
                    Send
                  </button>
                </div>
                <Social class="icon-lg"/>
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
