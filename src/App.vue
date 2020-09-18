<template>
  <div id="app">
    <NavBar></NavBar>
    <Home></Home>
    <about></about>

  </div>
</template>

<script>

import NavBar from "@/components/Nav-Bar";
import Home from "@/components/Home";
import About from "@/components/About";
export default {
  name: "App",
  components: {
    About,
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
