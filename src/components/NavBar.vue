<template>
    <el-menu :router=true mode="horizontal" :default-active="this.$router.currentRoute.path">
      <el-menu-item index="/app/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/app/infos">
        <i class="el-icon-info"></i>
        <span slot="title">Informations utiles</span>
      </el-menu-item>
      <el-menu-item index="/app/profile">
        <i class="el-icon-setting"></i>
        <span slot="title">Settings</span>
      </el-menu-item>
      <el-menu-item index="/logout">
        <i class="el-icon-close"></i>
        <span slot="title">Logout</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
  }
</script>