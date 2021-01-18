<template>
  <div id="app">
    <NavBar></NavBar>
    <Home></Home>
    <about></about>
    <Resume></Resume>
    <contact></contact>
  </div>
</template>

<script>
import NavBar from "@/components/Nav-Bar";
import Home from "@/components/Home";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
export default {
  name: "App",
  components: {
    Contact,
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
*::selection {
  color: #f0f0f0;
  background: #009e66;
}
/* ---- reset ---- */

</style>
