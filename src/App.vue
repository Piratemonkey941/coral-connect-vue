<script setup lang="ts">

</script>

<template>

  <nav>
    <button class="routerButton">
      <router-link to="/">Home</router-link>
    </button>
    <button class="routerButton">
      <router-link to="/feed">Feed</router-link>
    </button>
    <button class="routerButton">
      <router-link to="/register">Register</router-link>
    </button>
    <button class="routerButton">
      <router-link to="/signin">Login</router-link>
    </button>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
  .routerButton {
    margin: 5px;
  }
</style>
