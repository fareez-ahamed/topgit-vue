<template>
  <navbar></navbar>
  <router-view></router-view>
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
</style>
