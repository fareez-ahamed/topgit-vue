<template>
<div class="row">
  <div class="col-md-3">
    <img class="img-responsive img-rounded" src="{{user.avatar_url}}" />
    <div>
      <h3>{{user.name}}<small></small</h3>
      <h4 class="text-muted"><i class="fa fa-user"></i> {{user.login}}</h4>
      <p><i class="fa fa-globe"></i> <a href="{{user.blog}}">{{user.blog}}</a></p>
      <p><i class="fa fa-envelope"></i> <a href="{{user.email}}">{{user.email}}</a></p>
      <p><i class="fa fa-map-marker"></i> <a href="{{user.location}}">{{user.location}}</a></p>
    </div>
  </div>
  <div class="col-md-9">
    <repository ng-repeat="repo in repos" details="repo"></repository>
  </div>
</div>
</template>

<script>
import Repo from './Repo'

export default {

  components : { Repo },

  data () {
    return {
      user: {},
      repos: []
    }
  }

}
</script>
