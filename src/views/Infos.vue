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
  name: "Infos",
  components: {
    NavBar
  }
};
</script>
