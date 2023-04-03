<template>
  <div class="container mt-5">
    <div class="row mb-8">
      <div class="col-md-6 p-3">
        <p class="lead">Hi, My Name Is</p>
        <h1 class="display-4">John Doe</h1>
        <h3>And I'm A Vue & Express Developer</h3>
        <p>
          Here you will find more about using vue. Each page uses a router link
          that works with vue applications, just like how React has its own way.
        </p>
        <a href="#" class="btn btn-primary rounded-pill">Learn More</a>
      </div>
      <div class="col-md-6 p-3">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
