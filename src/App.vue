<script>

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppMain,
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
<AppMain />
</template>

<style  lang="scss">
@use "./styles/generals.scss"
</style>
