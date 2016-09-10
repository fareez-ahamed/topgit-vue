<template>
<div class="row">
  <div class="col-md-8">
    <form>
      <div class="form-group">
        <input type="text" v-model="query" @keypress.enter="search" class="form-control" placeholder="Search by Language">
      </div>
    </form>
    <div v-for="alert in alerts" class="alert alert-{{alert.type}}" role="alert">{{alert.msg}}</div>
    <repo v-for="repo in repos" :details="repo"></repo>
  </div>
  <div class="col-md-4">
    <filter-options></filter-options>
    <rate-limit></rate-limit>
  </div>
</div>
</template>

<script>
import github from '../services/Github'
import Repo from './Repo'
import RateLimit from './RateLimit'
import FilterOptions from './FilterOptions'

export default {

  components: { Repo, RateLimit, FilterOptions },

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
      github.searchRepos(this.query, this.currentPage,
        (response) => {
          this.repos = response.body.items
          // console.log(this.repos)
        }, (error) => {
          console.log('This is error')
          console.log(error)
        })
    }
  }
}
</script>
