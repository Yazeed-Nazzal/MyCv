<template>
  <section class="Home">
    <div class="Opacity-box">
      <div class="container text-center h-100">
        <div class="row h-100 d-flex align-items-center justify-content-center">
          <div class="col Navi text-center">
            <h1 class="mb-4">yazeed nazal</h1>
            <h4 class="Web">Web developer</h4>
            <h4 class="AniH">
              <span class="Animated-span">
                <span class="Visable front">FrontEnd</span>
                <span class="notVisable back">BackEnd</span>
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div class="Icon-List-Box">
        <div class="Social-media">
          <ul>
            <li class="p-md-2">
              <a href="https://www.facebook.com/yazeed.nazal" target="_blank"
                ><i class="fab fa-facebook-square"></i
              ></a>
            </li>
            <li class="p-md-2">
              <a href="https://twitter.com/yazeed67981083" target="_blank"
                ><i class="fab fa-twitter-square"></i
              ></a>
            </li>
            <li class="p-md-2">
              <a href="https://github.com/Yazeed-Nazzal"
                ><i class="fab fa-github-square"></i
              ></a>
            </li>
            <li class="p-md-2">
              <a href="https://wa.me/0798289659"
                ><i class="fab fa-whatsapp"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <particles></particles>
  </section>
</template>
<script>
import $ from "jquery";
export default {
  methods: {},
  mounted() {
    setInterval(function() {
      $(".Animated-span").animate({ width: "0px" }, 1250, function() {
        $(".front")
          .toggleClass("Visable")
          .toggleClass("notVisable");
        $(".back")
          .toggleClass("Visable")
          .toggleClass("notVisable");
        $(".Animated-span").animate({ width: "140px" }, 1250);
      });
    }, 2500);
  },
  props: {}
};
</script>
<style>
.Home {
  background-image: url("../assets/shapelined-K9QHL52rE2k-unsplash.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  color: #fff;
  z-index: 99;
}
.Home a {
  color: white;
}
.Home a:hover {
  color: #009e66;
}
.Opacity-box {
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100%;
  z-index: 10;
}
.Icon-List-Box {
  position: relative;
}
.Social-media {
  position: absolute;
  bottom: 30px;
}
.Social-media ul {
  list-style: none;
  font-size: 20px;
}
.Home h1 {
  font-size: 70px;
  text-transform: capitalize;
  font-weight: 900;
}
.Home p {
  font-size: 25px;
  text-transform: capitalize;
}
.Animated-span {
  border-right: solid 1px white;
  padding-right: 10px;
  margin-right: 5px;
  overflow: hidden;
}
.Visable {
  display: inline;
}
.notVisable {
  display: none;
}
.Home h4 {
  font-weight: 100;
  font-size: 30px;
  text-transform: capitalize;
}
@media only screen and (max-width: 720px) {
  .Home h1 {
    font-size: 50px;
  }
  .Home p {
    font-size: 20px;
  }
  .Navi {
    margin-top: 80px;
  }
}
</style>
