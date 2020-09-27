<template>
  <div class="Contact">
    <div class="container">
      <div class="row" style="padding-top: 70px">
        <div style="cursor: pointer" @click="Exit" class="Exit">
          <i class="fas fa-times"></i>
        </div>
        <div class="col-12 text-center ">
          <p class="P1">Feel free to contact me anytimes</p>
          <h1 class="mb-4" style="font-size: 45px; font-weight: 700">
            Get in Touch
          </h1>
          <p class="Loader"><span></span></p>
        </div>
      </div>
      <div class="row" style="margin-top: 100px">
        <div class="col-lg-7">
          <div>
            <h4 style="margin-bottom: 22px; color: #f0f0f0">Message Me</h4>
            <form action="/">
              <div class="row">
                <div class="col-12 col-md-6 mb-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="Name"
                      placeholder="Name"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6 mb-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control "
                      id="Email"
                      placeholder="Name"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="col-12 mb-3">
                  <div class="form-group">
                    <input
                      type="test"
                      class="form-control"
                      id="subject"
                      autocomplete="off"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="col-12 mb-3">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="Message"
                      rows="5"
                      placeholder="Message"
                      style="height: auto"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 mb-3">
                  <div class="form-group">
                    <button class="d-inline-block Download-CV" style="height: 50px;padding: 10px 26px">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5">
          <h4 style="color:#f0f0f0; line-height: 1.5;margin-bottom: 15px;font-weight: 500">Contact Info</h4>
          <p style="font-size: 15px; margin-bottom: 28px;color: #9f9f9f">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <div class="row">
            <div class="col-2" style="border-right: solid 2px rgba(255,255,255,.15) ">
                <ul>
                    <li class="Contact-Icon mb-3 "><i class="fas fa-address-card"></i></li>
                  <li class="Contact-Icon mb-4 "><i class="fas fa-map-marked-alt"></i></li>
                  <li class="Contact-Icon mb-3 "><i class="fas fa-phone-alt"></i></li>
                  <li class="Contact-Icon mb-3 "><i class="fas fa-envelope"></i></li>
                </ul>
            </div>
            <div class="col-10">
                <ul class="mb-4">
                  <li class="First-li">Name</li>
                  <li class="Secund-Li">Yazeed Nazzal</li>
                </ul>
              <ul>
                <li class="First-li">Location</li>
                <li class="Secund-Li">Ammman / Jordan</li>
              </ul>
              <ul>
                <li class="First-li">Call Me</li>
                <li class="Secund-Li">+962798289659</li>
              </ul>
              <ul>
                <li class="First-li">Email Me</li>
                <li class="Secund-Li">Yazeed_Nazal@hotmail.com</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  methods: {
    Exit() {
      $(".Contact").css("opacity", "0");
      $(".Contact").css("z-index", "-9999");
      $(".Home").css("z-index", "9999");
    }
  },
  props: {}
};
</script>
<style>
.Contact {
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
.Contact::-webkit-scrollbar {
  width: 10px;
  background-color: #111;
}
.Contact::-webkit-scrollbar-thumb {
  background-color: #222;
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
.P1 {
  color: #9f9f9f;
  font-size: 15px;
}
.Contact .form-control {
  background-color: #161616;
  border: none;
  border-bottom: 1px solid #161616;
  border-radius: 0;
  font-size: 15px;
  height: 44px;
  padding: 9px 14px;
  color: #9f9f9f;
  border-radius: 2px;
  margin-bottom: 10px;
}
.Contact .form-control:focus {
  box-shadow: none;
  background-color: #161616;
  border-bottom: 2px solid #009e66;
}
.Contact ul
{
  list-style: none;
  padding: 0px;
}
.Contact-Icon
{
color: #009e66;
  font-size: 33px;
  padding: 0px;
}
.First-li{
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 0;
  color: #f0f0f0;
}
.Secund-Li
{
  color: #9f9f9f;
  font-family: Poppins,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.95;

}
</style>
