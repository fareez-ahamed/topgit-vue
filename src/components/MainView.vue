<template>
<div class="row">
  <div class="col-md-8">
    <form>
      <div class="form-group">
        <input type="text" v-model="repoPagination.currentPage" @keypress.enter="search" class="form-control" placeholder="Search by Language">
      </div>
    </form>
    <div v-for="alert in alerts" class="alert alert-{{alert.type}}" role="alert">{{alert.msg}}</div>
    <repo v-for="repo in repos" :details="repo"></repo>
    <pagination :current-page.sync="repoPagination.currentPage"
                :total-items="repoPagination.totalItems"
                :items-per-page="repoPagination.itemsPerPage"></pagination>
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
import Pagination from './Pagination'

export default {

  components: { Repo, RateLimit, FilterOptions, Pagination },

  data () {
    return {
      query: '',
      minStar: 0,
      repoPagination: {
        currentPage: 1,
        totalItems: 7,
        itemsPerPage: 5
      },
      alerts: [],
      repos: []
    }
  },

  methods: {
    search () {
      github.searchReposByLang(this.query, this.minStar, this.currentPage,
        (response) => {
          this.repos = response.body.items
          // console.log(this.repos)
        }, (error) => {
          console.log(error)
        })
    }
  }
}
</script>
