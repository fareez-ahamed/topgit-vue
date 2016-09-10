<template>
<div class="row">
  <div class="col-md-8">
    <form>
      <div class="form-group">
        <input type="text" v-model="query" @keypress.enter="search" class="form-control" placeholder="Search by Language">
      </div>
    </form>
    <div v-repeat="alert in alerts" class="alert alert-{{alert.type}}" role="alert">{{alert.msg}}</div>
    <repositories v-repeat="repo in repos" :details="repo"></repositories>
  </div>
  <div class="col-md-4">
    <filter-options></filter-options>
    <rate-limit></rate-limit>
  </div>
</div>
</template>

<script>
import github from '../services/Github'
import Repositories from './Repositories'

export default {

  components: { Repositories },

  data () {
    return {
      query: '',
      currentPage: 1,
      alerts: [],
      repos: []
    }
  },

  methods: {
    search () {
      github.searchRepoByLang(this.query, this.currentPage,
        (response) => {
          console.log(response)
          this.repos = response.body.items
        }, (error) => {
          console.log(error)
        })
    }
  }
}
</script>
