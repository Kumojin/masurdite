<template>
  <div>
    <h1>404</h1>
    <router-link to="/app" v-if="this.$store.getters.isAuthentified">Return to App</router-link>
    <router-link to="/" v-if="!this.$store.getters.isAuthentified">Return to Homepage</router-link>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>
