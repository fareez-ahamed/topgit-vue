<template>
<div>
  <hr />
  <div class="row">
    <div class="col-md-8">
      <h4><a href="{{details.html_url}}" target="_blank">{{details.owner.login}}/<b>{{details.name}}</b></a></h4>
      <p>{{details.description}}</p>
      <p class="text-muted">{{details.language}} • By {{details.owner.login}}</p>
    </div>
    <div class="col-md-2 icon-box">
      <p class="text-center"><i class="fa fa-2x fa-star" aria-hidden="true"></i></p>
      <p class="text-center">{{details.stargazers_count}}</p>
    </div>
    <div class="col-md-2 icon-box">
      <p class="text-center"><i class="fa fa-2x fa-code-fork" aria-hidden="true"></i></span>
      </p>
      <p class="text-center">{{details.forks}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {

  props: ['details']

}
</script>
