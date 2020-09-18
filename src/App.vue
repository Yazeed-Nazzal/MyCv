<template>
  <div id="app">
    <NavBar></NavBar>
    <Home></Home>
    <about></about>
    <Resume></Resume>

  </div>
</template>

<script>

import NavBar from "@/components/Nav-Bar";
import Home from "@/components/Home";
import About from "@/components/About";
import Resume from "@/components/Resume";
export default {
  name: "App",
  components: {
    Resume,
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
