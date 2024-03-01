<script>
import Projects from "./components/Projects.vue";
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    Projects,
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <Projects />
</template>

<style  lang="scss">
@use "./styles/generals.scss"
</style>
