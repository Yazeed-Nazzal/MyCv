<template>
  <div class="NavBar">
    <div
      class="container-fluid d-flex justify-content-between px-5 pt-4 align-items-center"
    >
      <div class="Logo-Box d-flex align-items-center">
        <i class="fab fa-y-combinator"></i>
        <span class="ml-3 ">Yazeed Nazzal</span>
      </div>
      <div>
        <div class="Navigation-List">
          <ul class=" d-flex justify-start">
            <li @click="Open('.About')" class="" data-name=".About" style="cursor: pointer">About</li>
            <li @click="Open('.Resume')" class="" style="cursor: pointer">Resume</li>
            <li class="">Portfolio</li>
            <li class="">Blog</li>
            <li @click="Open('.Contact')" style="cursor: pointer">Contact</li>
          </ul>
        </div>
        <div  id="Menu-Button" class="Mobile-Menu">
          <i @click="NavToogle" style="font-size: 30px" class="fas fa-stream"></i>
        </div>
        <div class="Mobile-Nav mt-2">
          <ul>
            <li @click="Open('.About')"   style="cursor: pointer">About</li>
            <li @click="Open('.Resume')"  style="cursor: pointer">Resume</li>
            <li class="">Portfolio</li>
            <li class="">Blog</li>
            <li @click="Open('.Contact')" style="margin-bottom: 0px" >Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {

  created() {
    $(window).resize(function(){

      $('.Mobile-Nav').css('display','none');

    });
  },
  methods : {
    Open (e) {
      $(e).css("opacity","1");
      $(e).css("z-index","99999");
    },

    NavToogle : function () {
          $('.Mobile-Nav').slideToggle('fast');
    }
  },
  props: {}
};
</script>
<style>

.NavBar{
  background: transparent;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  color: #e6e6e6;
  z-index: 100;

}
.Logo-Box i {
  font-size: 60px;
  color: #009e66;
}
.Logo-Box span
{
  font-size: 20px;
  font-weight: 700;
}
.Mobile-Menu {
  display: none;
  cursor: pointer;
}
.Navigation-List ul {
  font-weight: 400;
  list-style: none;
  font-size: 15px;
}
.Navigation-List ul li
{
  padding-left: 33px;
}
.Mobile-Nav
{
  position: absolute;
  right: 50px;
  display: none;
  background: #191919;
  width: 200px;
  padding: 16px 20px;
  font-size: 13px;
  padding-bottom: 5px;


}
.Mobile-Nav ul
{
  list-style: none;
  padding-left: 10px;
  padding-bottom: 0px;
  color: rgba(255,255,255,.7);

}
.Mobile-Nav ul li
{
  margin-bottom: 20px;
}
@media only screen and (max-width: 720px) {
  .Navigation-List {
    display: none;
  }
  .Mobile-Menu {
    display: block;
  }
}

</style>
