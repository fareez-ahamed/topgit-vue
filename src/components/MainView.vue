<template>
<div class="row">
  <div class="col-md-8">
    <form>
      <div class="form-group">
        <input type="text" ng-model="query" uib-typeahead="language for language in languages | filter:$viewValue | limitTo:8" ng-enter="search()" class="form-control" placeholder="Search by Language">
      </div>
    </form>
    <div v-repeat="alert in alerts" class="alert alert-{{alert.type}}" role="alert">{{alert.msg}}</div>
    <repositories></repositories>
  </div>
  <div class="col-md-4">
    <filter-options></filter-options>
    <rate-limit></rate-limit>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      alerts: []
    }
  }
}
</script>
