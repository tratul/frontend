<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style>

</style>
<script>
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer.vue";

  export default {
    components: { Navbar, Footer }
  }
</script>