<template lang="pug">
  el-container
    el-header
      h1 Dashboard
    el-main
      h2 Ma surdité
      ul
        li Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        li Sed posuere dictum eros, eu imperdiet tortor volutpat dapibus.
        li Etiam eu nulla eget erat auctor tristique dignissim eu nibh.
      h2 Mon audiograme
        img(src="http://via.placeholder.com/350x300")
    el-footer
      NavBar
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Dashboard",
  components: {
    NavBar
  }
};
</script>
