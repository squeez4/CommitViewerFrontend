<script>
import TheWelcome from '@/components/TheWelcome.vue'

const API_URL =  import.meta.env.VITE_API_URL;

export default {
  components: {
    TheWelcome
  },
  data: () => ({
    commits: [],
    toggleModal: false
  }),
  created() {
    this.getCommits();
  },
  methods: {
    async getCommits() {
      const url = `${API_URL}/github`;
      this.commits = await (await fetch(url)).json();
    }
  }
}
</script>

<template>
  <main>
    <div class="container mx-auto">
    <div>
      <h1 class="font-bold text-lg text-center">CommitViewer</h1>
      <p class="my-4 break-words text-center max-w-lg">Here you could watch the commit history of this repository: https://github.com/squeez4/CommitViewerBackend</p>
    </div>
      <div class="text-right my-5">
      <button class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-lg shadow-sm">Update</button>
      </div>
      <div class="bg-white rounded-lg shadow w-98 p-4">
        <ul class="divide-y divide-gray-200">
          <li class="py-4" v-for="item in commits">
            <div class="flex space-x-3">
              <img src="https://picsum.photos/200/200" alt="" class="h-6 w-6 rounded-full">
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h1 class="font-semibold">{{item.commit.author.name}}</h1>
                </div>
                <p class="text-sm	text-slate-500 py-2">{{item.commit.message}}</p>
                <div>
                  <a style="cursor: pointer" @click="toggleModal = !toggleModal" class="px-2 py-1 rounded-lg bg-cyan-500 text-xs text-white">View Commit Details</a>
                </div>
              </div>
             
            </div>
          </li>
        </ul>
      </div>
      <div v-if="toggleModal" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
        <div class="relative mx-auto w-auto max-w-2xl">
          <div class="bg-white w-full p-4 m-5">
            <div><span class="font-semibold">Author:</span></div>
            <div></div>
            <div>
              <button class="rounded bg-green-500 text-white px-2 mt-1 py-2">Close</button>
            </div>
          </div>

        </div>
      </div>
      <div v-if="toggleModal" class="absolute inset-0 z-40 opacity-25 bg-black">

      </div>
    </div>
  </main>
</template>