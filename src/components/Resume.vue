<template>
  <div class="Resume">
    <div class="container ">
      <div class="row My-Resume-Header mb-5">
        <div style="cursor: pointer" @click="Exit" class="Exit">
          <i class="fas fa-times"></i>
        </div>
        <div class="col-12 text-center">
          <p class="P1">Check out my Resume</p>
          <h1 style="font-size: 45px; font-weight: 700">Resume</h1>
          <p class="Loader"><span></span></p>
        </div>
      </div>
      <div class="row My-Resume-Box" style="margin-top: 70px">
        <div class="col-md-6">
            <div class="Education-Box ">
              <h3 style="font-size: 26px; margin-bottom: 20px; color: #f0f0f0">Education</h3>
              <div class="card" >
                <div class="card-body">
                  <h5 class="card-title"> BA of Computer Science</h5>
                  <h6 class="card-subtitle mb-2 text-muted">world islamic sciences and education university   2017 - 2021</h6>
                  <p class="card-text">GPA : 3.47</p>
                </div>
                <i class="fas fa-arrow-right Card-icon"></i>
              </div>
            </div>
        </div>
        <div class="col-md-6">
          <div class="Experience-Box ">
            <h3 style="font-size: 26px; margin-bottom: 20px; color: #f0f0f0">Experience</h3>
            <div class="card" >
              <div class="card-body">
                <h5 class="card-title">Web Development</h5>
                <h6 class="card-subtitle mb-2 text-muted">Freelancer 2018 </h6>
                <p class="card-text">Learning to build web applications starting from 2017</p>
              </div>
              <i class="fas fa-arrow-right Card-icon"></i>
            </div>

          </div>
        </div>

      </div>
      <div class="row My-Skills mb-5">
        <div class="col-12" style="margin-bottom: 50px">
          <p style="font-size: 14px;color: #9f9f9f">My level of knowledge in some tools</p>
          <h1 style="font-size: 38px;font-weight: 700">My Skills</h1>
        </div>
        <div class="col-12 col-md-6" style="margin-bottom: 40px">
            <div class="Progress-Info d-flex justify-content-between">
              <span>html/css</span>
              <span>95%</span>
            </div>
          <div class="progress" style="background-color: #2f2f2f; height: 9px">
            <div class="progress-bar " role="progressbar" style="width: 95%; background-color: #009e66" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-12 col-md-6" style="margin-bottom: 40px">
          <div class="Progress-Info d-flex justify-content-between">
            <span>JavaScript</span>
            <span>75%</span>
          </div>
          <div class="progress" style="background-color: #2f2f2f; height: 9px">
            <div class="progress-bar " role="progressbar" style="width: 75%; background-color: #009e66" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-12 col-md-6" style="margin-bottom: 40px">
          <div class="Progress-Info d-flex justify-content-between">
            <span>php</span>
            <span>80%</span>
          </div>
          <div class="progress" style="background-color: #2f2f2f; height: 9px">
            <div class="progress-bar " role="progressbar" style="width: 80%; background-color: #009e66" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-12 col-md-6" style="margin-bottom: 40px">
          <div class="Progress-Info d-flex justify-content-between">
            <span>Vue.js</span>
            <span>80%</span>
          </div>
          <div class="progress" style="background-color: #2f2f2f; height: 9px">
            <div class="progress-bar " role="progressbar" style="width: 80%; background-color: #009e66" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-12 col-md-6" style="margin-bottom: 40px">
          <div class="Progress-Info d-flex justify-content-between">
            <span>Laravel</span>
            <span>70%</span>
          </div>
          <div class="progress" style="background-color: #2f2f2f; height: 9px">
            <div class="progress-bar " role="progressbar" style="width: 70%; background-color: #009e66" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-12 col-md-6" style="margin-bottom: 40px">
          <div class="Progress-Info d-flex justify-content-between">
            <span>BootStrap</span>
            <span>90%</span>
          </div>
          <div class="progress" style="background-color: #2f2f2f; height: 9px">
            <div class="progress-bar " role="progressbar" style="width: 90%; background-color: #009e66" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  props: {},
  methods: {
    Exit() {
      $(".Resume").css("opacity", "0");
      $(".Resume").css("z-index", "-9999");
      $(".Home").css("z-index", "9999");
    }
  }
};
</script>
<style>
.Resume {
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
.Resume::-webkit-scrollbar {
  width: 10px;
  background-color: #111;
}
.Resume::-webkit-scrollbar-thumb {
  background-color: #222;
}
.My-Resume-Header
{
  padding-top: 70px;

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
 .My-Resume-Box  .card
 {
   background-color: #161616;
   border-left: 2px solid transparent;
   padding: 32px 48px;
   position: relative;
   border-left-color: #009e66;
   min-height: 200px;
 }
 .My-Resume-Box .card-body {
   padding: 0px;
 }
 .Card-icon
 {
   position: absolute;
   top: 6px;
   left: -1px;
   color: #009e66;
   font-size: 25px;
 }
.My-Resume-Box .card-title
 {
  color: #f0f0f0;
  margin-bottom: 8px;

 }
.My-Resume-Box .card-body , .My-Resume-Box .card-subtitle
{
  color: #9f9f9f;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.95;
}
.My-Resume-Box
{
  margin-bottom: 100px;
}
.Progress-Info
{
  font-size: 16px;
  margin-bottom: 4px;
  color: #cecece;
  text-transform: capitalize;
}

@media only screen and (max-width: 720px) {
.Education-Box , .Experience-Box
{
  padding: 0px;
}
}


</style>