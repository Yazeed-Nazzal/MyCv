<template>
  <section class="About">
    <div class="container  ">
      <div class="row About-Header mb-5">
        <div style="cursor: pointer" @click="Exit" class="Exit">
          <i class="fas fa-times"></i>
        </div>
        <div class="col text-center">
          <p class="P1">Get to know me</p>
          <h1 class="About-me">About Me</h1>
          <p class="Loader"><span></span></p>
        </div>
      </div>
      <div style="margin-bottom: 100px; margin-top: 100px" class="row">
        <div class="col-lg-4 My-Img"></div>
        <div class="col-lg-8" style="padding-left: 60px">
          <h4 class="My-Info-h4">Who am i?</h4>
          <p class="My-Info-P">
            I'm yazeed nazal, a full-stake Web Developer
          </p>
          <p class="My-Info-P2">
            Junior full-stack web developer able to build a web systems from the ground up -
            from backend, UI, and web APIs, also building web systems using the SPA concept
            Skilled at writing well-design, efficient code using current best practice in web
            development, fast learner, hard worker, and team player who proficient in a set of
            scripting languages for web development and always abreast of developments in
            web applications and programming languages.
          </p>
          <p class="h-r"></p>
          <div class="row Personal-info ">
            <div class="col-12 col-md-6">
              Name:<span class="data">Yazeed Nazal</span>
            </div>
            <div class="col-12 col-md-6">
              Eamil:<span class="data email">Yazeed_nazal@hotmail.com</span>
            </div>
            <div class="col-12 col-md-6">Age:<span class="data">22</span></div>
            <div class="col-12 col-md-6">
              From:<span class="data">Jordan amman</span>
            </div>
          </div>
          <div class="My-Info-End d-block d-sm-flex mt-3">
            <button class="d-inline-block Download-CV"><a style="color: #fff"
                                                          href="https://drive.google.com/file/d/1QNSd4AYzCA17Lvx4QBwljPx_GyUolUXu/view?usp=sharing">Download
              CV</a></button>
            <ul class="d-flex Social-list ">
              <li class="p-md-2 ml-4">
                <a href="https://www.facebook.com/yazeed.nazal" target="_blank"
                ><i class="fab fa-facebook-square"></i
                ></a>
              </li>
              <li class="p-md-2">
                <a href="https://twitter.com/yazeed67981083" target="_blank"
                ><i class="fab fa-twitter"></i
                ></a>
              </li>
              <li class="p-md-2">
                <a href="https://github.com/Yazeed-Nazzal" target="_blank"
                ><i class="fab fa-github-square"></i
                ></a>
              </li>
              <li class="p-md-2">
                <a href="https://wa.me/0798289659" target="_blank"
                ><i class="fab fa-whatsapp"></i
                ></a>
              </li>
              <li class="p-md-2">
                <a href="linkedin.com/in/yazeed-nazzal-55264a1b8" target="_blank"
                ><i class="fab fa-linkedin"></i
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="MY-Services" style="margin-bottom: 100px">
      <div class="container">
        <p style="font-size: 15px; color: #9f9f9f;">
          Services i offer to my clients
        </p>
        <h1
            class="mb-4"
            style="font-size: 38px; font-weight: 700; color: #f0f0f0;"
        >
          My Services
        </h1>
        <div class="row">
          <div style="padding: 10px" class="col-12 col-md-4 shadow-S ">
            <div class="Services-Box">
              <p class="Services-Icon"><i class="fab fa-laravel"></i></p>
              <h2>Web Development</h2>
              <p style="font-size: 14px; color: #9f9f9f">
                Building personal web pages or for your own business and
                building comprehensive web applications with the latest
                technologies.
              </p>
            </div>
          </div>
          <div style="padding: 10px" class="col-12 col-md-4 shadow-S">
            <div class="Services-Box">
              <p class="Services-Icon"><i class="fas fa-arrows-alt"></i></p>
              <h2>Fully Responsive</h2>
              <p style="font-size: 14px; color: #9f9f9f">
                Building web pages and applications so that they respond and
                work on all screens of different sizes and dimensions.
              </p>
            </div>
          </div>
          <div style="padding: 10px" class="col-12 col-md-4 shadow-S ">
            <div class="Services-Box">
              <p class="Services-Icon"><i class="fas fa-hands-helping"></i></p>
              <h2>Customer Support</h2>
              <p style="font-size: 14px; color: #9f9f9f">
                Helping customers to host their sites after construction and
                providing after-sales services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  props: {},
  methods: {
    Exit() {
      $(".About").css("opacity", "0");
      $(".About").css("z-index", "-9999");
      $(".Home").css("z-index", "9999");
    }
  }
};
</script>
<style>
.About {
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #111;
  color: #f0f0f0;
  opacity: 0;
  height: 100vh;
  z-index: -9999;
  overflow-y: scroll;
}

.About::-webkit-scrollbar {
  width: 10px;
  background-color: #111;
}

.About::-webkit-scrollbar-thumb {
  background-color: #222;
}

.P1 {
  color: #9f9f9f;
  font-size: 15px;
}

.About-me {
  font-weight: 700;
  font-size: 45px;
}

.About-Header {
  margin-top: 70px;
}

.Loader {
  width: 80px;
  height: 4px;
  background-color: #009e66;
  margin: 10px auto;
  position: relative;
}

.Loader span {
  position: absolute;
  left: 10px;
  height: 4px;
  padding: 0px 5px;
  border-right: solid 4px #111;
  border-left: solid 4px #111;
  animation-name: Loder-span;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes Loder-span {
  0% {
    left: -10px;
  }
  100% {
    left: 80px;
  }
}

.My-Img {
  padding: 40px;
  background-image: url("../assets/yazeed-Nazal.png");
  background-size: cover;
  background-position: center;
}

.My-Info-h4 {
  color: #009e66;
  font-weight: 500;
  margin-bottom: 20px;
}

.My-Info-P {
  color: #f0f0f0;
  font-weight: 700;
  font-size: 30px;
}

.My-Info-P2 {
  color: #9f9f9f;
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 30px;
}

.h-r {
  width: 100%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.08);
}

.Personal-info {
  padding-top: 20px;
  margin-bottom: 30px;
}

.Personal-info div {
  color: #dadada;
  font-size: 15px;
}

.data {
  color: #9f9f9f;
  margin-left: 10px;
  font-size: 15px;
}

.email {
  color: #009e66;
}

.Social-list {
  line-height: 100%;
  align-items: center;
  list-style: none;
}

.Social-list:before {
  content: " ";
  width: 70px;
  background-color: rgba(255, 255, 255, 0.25);
  height: 2px;
  border-radius: 2px;
}

.Social-list li a {
  color: #dadada;
  font-size: 20px;
}

.Social-list li a:hover {
  color: #009e66;
}

.Download-CV {
  background-color: #009e66;
  outline: none;
  border: none;
  padding: 15px 45px;
  border-radius: 40px;
  line-height: 1px;
  color: white;
  font-size: 14px;
}

@media only screen and (max-width: 720px) {
  .My-Img {
    margin: 10px 120px;
    height: 180px;
    border-radius: 100%;
  }

  .Download-CV {
    padding-top: 20px;
    margin-bottom: 20px;
  }

  .Social-list li {
    margin-left: 10px;
  }
}

.Exit {
  position: absolute;
  top: 25px;
  right: 70px;
  font-size: 30px;
}

.INfo {
  padding-left: 60px;
}

.Services-Box {
  background-color: #161616;
  padding: 30px;
  margin-left: 10px;
  height: 323px;
}

.Services-Box h2 {
  color: #f3f3f3;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 14px;
}

.Services-Icon {
  color: #009e66;
  font-size: 58px;
}

.shadow-S {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.Services-Box:hover {
  border-bottom: 3px #009e66 solid;
}
</style>
