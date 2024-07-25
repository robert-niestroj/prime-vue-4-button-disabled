<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>

  <Button as="router-link" label="Route to Page B" to="/pageb" style="background-color: navy; padding: 5px; margin: 5px;" disabled></Button>
  <div style="border: 1px solid red; width: 300px; height: 300px;">
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
