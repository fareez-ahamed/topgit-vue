<template>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      <a class="navbar-brand" id="brand" href="#/">Topgit</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><a v-link="{ path: '/myrepos'}">My Repos</a></li>
      </ul>

    </div>
    <!--/.nav-collapse -->
  </div>
  <!--/.container-fluid -->
</nav>
</template>

<script>
export default {

  data () {
    return {}
  }

}
</script>
