<template>
  <div id="app">
    <NavBar></NavBar>
    <Home></Home>

  </div>
</template>

<script>

import NavBar from "@/components/Nav-Bar";
import Home from "@/components/Home";
export default {
  name: "App",
  components: {
    Home,
    NavBar

  }
};
</script>

<style lang="scss">
* {
  font-family: Poppins;
}


</style>
