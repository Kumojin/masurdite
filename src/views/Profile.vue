<template lang="pug">
  el-container
    el-header
      h1 Mon profil
    el-main
      h2 Oreille Droite
      form
        div(class="audiogramme-point-entry" v-for="(step, index) in audition.steps" :key="step")
          label {{ step }} Hz
          input(type="number" :name="'r' + step" @change="onAuditionUpdate" placeholder="0 dB HL" v-model="audition.right[step]" :tabindex="index + 1")
      
      h2 Oreille Gauche
      form
        div(class="audiogramme-point-entry" v-for="(step, index) in audition.steps" :key="step")
          label {{ step }} Hz
          input(type="number" :name="'l' + step" @change="onAuditionUpdate" placeholder="0 dB HL" v-model="audition.left[step]" :tabindex="index + 11")
    el-footer 
      NavBar
</template>

 
<script>
import NavBar from "@/components/NavBar.vue";
import store from "@/store/index.js";

export default {
  name: "Profile",
  components: {
    NavBar
  },
  data: () => ({
    audition: {}
  }),
  methods: {
    onAuditionUpdate: ({ target }) => {
      const ear = target.name[0] === "l" ? "left" : "right";
      const hz = target.name.substring(1);
      store.dispatch("updateAudition", { ear, hz, value: Number(target.value) });
    }
  },

  created() {
    this.audition = store.state.user.profile.audition;
  }
};
</script>

<style>
html,
body {
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

.audiogramme-point-entry {
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  padding: 4px;
}

.audiogramme-point-entry label {
  background: #fafafa;
  display: inline-block;
  margin-right: 4px;
  margin-top: -1px;
  padding: 4px;
  text-align: right;
  width: 120px;
}

.audiogramme-point-entry input {
  display: inline-block;
  width: 60px;
}
</style>
