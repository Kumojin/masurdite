<template lang="pug">
  el-container
    el-header
      h1 Mon profil
    el-main
      el-row
        el-col(span="12")
          h2 Oreille Droite
          form(class="audiogramme-form")
            div(class="audiogramme-point-entry" v-for="(step, index) in audition.steps" :key="step")
              label {{ step }} Hz
              input(type="number" :name="'r' + step" @change="onAuditionUpdate" placeholder="0 dB HL" v-model="audition.right[step]" :tabindex="index + 1")
              span dB
        
        el-col(span="12")
          h2 Oreille Gauche
          form(class="audiogramme-form")
            div(class="audiogramme-point-entry" v-for="(step, index) in audition.steps" :key="step")
              label {{ step }} Hz
              input(type="number" :name="'l' + step" @change="onAuditionUpdate" placeholder="0 dB HL" v-model="audition.left[step]" :tabindex="index + 11")
              span dB
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
      store.dispatch("updateAudition", {
        ear,
        hz,
        value: Number(target.value)
      });
    }
  },

  created() {
    this.audition = store.state.user.profile.audition;
  }
};
</script>

<style lang="css" scope>
.audiogramme-form {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  display: block;
  margin: auto auto;
  padding: 8px;
  width: 240px;
}

.audiogramme-point-entry {
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  padding: 8px;
}

.audiogramme-point-entry label {
  display: inline-block;
  margin-right: 4px;
  margin-top: -1px;
  padding: 4px;
  text-align: right;
  width: 80px;
}

.audiogramme-point-entry input {
  display: inline-block;
  width: 60px;
}

.audiogramme-point-entry span {
  padding-left: 4px;
}
</style>
