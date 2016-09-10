<template>
  <navbar></navbar>
  <div class="container navbar-margin">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  replace: false
}
</script>

<style>
.navbar-margin {
  margin-top: 100px;
}
</style>
