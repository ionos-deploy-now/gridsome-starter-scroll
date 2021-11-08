<template>
  <Layout>
    <div>
      <section id="about" class="h-screen bg-content-color">
        <div class="container mx-auto h-full flex-center border-b-4">
          <div class="flex flex-col">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div
                  class="flex flex-col items-center text-center justify-center border-2 p-4 border-dashed"
                >
                  <img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&hatColor=Pink&facialHairType=BeardLight&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=DarkBrown"
                  />
                  <h2 class="font-medium title-font mt-4 text-2xl text-content-highlight">
                    {{ $static.metadata.author }}
                  </h2>
                  <div class="w-24 h-1 rounded mt-2 mb-4 bg-content-highlight"></div>
                </div>
                <p class="text-xl">
                  I build things for the web.
                </p>
              </div>
              <div
                class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
              >
                <p class="leading-relaxed text-lg mb-4">
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
        <div class="container mx-auto h-full flex-center border-b-4">
          <div class="flex flex-wrap">
            <div class="flex relative py-10 md:w-2/3 mx-auto">
              <div
                class="h-full w-24 absolute inset-0 flex items-center justify-center"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                class="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center bg-amber-500 z-1"
              >
                <div class="flex flex-col text-center leading-none">
                  <span>2019</span>
                  <span>-</span>
                  <span>now</span>
                </div>
              </div>
              <div
                class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              >
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font mb-1 text-xl">
                    Tripplenix
                  </h2>
                  <p class="leading-relaxed">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>

            <div class="flex relative py-10 md:w-2/3 mx-auto">
              <div
                class="h-full w-24 absolute inset-0 flex items-center justify-center"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                class="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center bg-light-blue-600 z-1"
              >
                <div class="flex flex-col text-center leading-none">
                  <span>2016</span>
                  <span>-</span>
                  <span>2019</span>
                </div>
              </div>
              <div
                class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              >
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font mb-1 text-xl">
                    d-Ontech
                  </h2>
                  <p class="leading-relaxed">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>

            <div class="flex relative py-10 md:w-2/3 mx-auto">
              <div
                class="h-full w-24 absolute inset-0 flex items-center justify-center"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                class="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center bg-light-blue-600 z-1"
              >
                <div class="flex flex-col text-center leading-none">
                  <span>2009</span>
                  <span>-</span>
                  <span>2016</span>
                </div>
              </div>
              <div
                class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              >
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font mb-1 text-xl">
                    Striplex
                  </h2>
                  <p class="leading-relaxed">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="h-screen bg-content-color">
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
              <div class="p-4 lg:w-1/4 md:w-1/2">
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
                          :href="$static.metadata.github"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Github"
                        >
                          <GithubIcon class="icon" />
                        </a>
                        <a
                          href="https://myoctocat.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Project I"
                        >
                          <OpenInNewIcon class="icon" />
                        </a>
                      </div>
                    </div>
                    <h2 class="title-font font-medium text-lg">
                      Project I
                    </h2>
                    <p class="mb-4">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
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
                          :href="$static.metadata.github"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Github"
                        >
                          <GithubIcon class="icon" />
                        </a>
                        <a
                          href="https://myoctocat.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Project II"
                        >
                          <OpenInNewIcon class="icon" />
                        </a>
                      </div>
                    </div>
                    <h2 class="title-font font-medium text-lg">
                      Project II
                    </h2>
                    <p class="mb-4">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
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
                          :href="$static.metadata.github"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Github"
                        >
                          <GithubIcon class="icon" />
                        </a>
                        <a
                          href="https://myoctocat.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Project III"
                        >
                          <OpenInNewIcon class="icon" />
                        </a>
                      </div>
                    </div>
                    <h2 class="title-font font-medium text-lg">
                      Project III
                    </h2>
                    <p class="mb-4">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
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
                    class="flex mx-auto border-0 py-2 px-8 rounded text-lg text-white bg-indigo-400 focus:outline-none hover:bg-indigo-600"
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

<static-query>
query {
  metadata {
    author
    github
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
