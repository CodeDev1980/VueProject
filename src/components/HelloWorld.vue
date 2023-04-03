<template>
  <div class="hello">
    <div class="row mb-8">
      <div class="col-md-3 hover-zoom">
        <h4>Barber Shop</h4>
        <a href="https://barber-cuts.netlify.app/" target="_blank">
          <img
            alt="Vue logo"
            class="img-fluid shadow-1-secondary rounded-3"
            src="../assets/barber-intro.png"
          />
        </a>
      </div>
      <div class="col-md-3 hover-zoom">
        <h4>Styling</h4>
        <a href="/about">
          <img
            alt="Vue logo"
            class="img-fluid shadow-1-secondary rounded-3"
            src="../assets/sass-image.png"
          />
        </a>
      </div>
      <div class="col-md-3 hover-zoom">
        <h4>Html tags</h4>
        <a href="/about">
          <img
            alt="Vue logo"
            class="img-fluid shadow-1-secondary rounded-3"
            src="../assets/html5.png"
          />
        </a>
      </div>
      <div class="col-md-3 hover-zoom">
        <h4>Html tags</h4>
        <a href="/about">
          <img
            alt="Vue logo"
            class="img-fluid shadow-1-secondary rounded-3"
            src="../assets/html5.png"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
