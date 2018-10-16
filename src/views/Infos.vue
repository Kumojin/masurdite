<template lang="pug">
  el-container
    el-header
      h1 Informations utiles
    el-main
      ul
        li 
          a(href="https://www.apda.ca/") Association des personnes avec une déficience de l'audition
        li 
          a(href="#") In feugiat tortor sem, interdum lacinia urna pellentesque ac.
        li 
          a(href="#") Nunc venenatis malesuada pretium.
        li 
          a(href="#") Phasellus id sagittis justo.
    el-footer
      NavBar
</template>


<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'Infos',
  components: {
    NavBar,
  }
};
</script>

<style>
html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.el-menu {
  text-align: center;
}

.el-menu--horizontal > .el-menu-item {
  display: inline-block;
  float: none;
}

@media (max-width: 700px) {
  .el-menu-item > span {
    display: none;
  }
}

@media (min-width: 440px) {
  .el-menu-item {
    padding: 0 30px;
  }
}

</style>
