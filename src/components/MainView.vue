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
    <pagination :current-page.sync="repoPagination.currentPage"
                :total-items="repoPagination.totalItems"
                :items-per-page="repoPagination.itemsPerPage"
                @page-changed="search"></pagination>
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
        totalItems: 0,
        itemsPerPage: 30
      },
      alerts: [],
      repos: []
    }
  },

  methods: {
    search () {
      console.log('search-called')
      github.searchReposByLang(this.query, this.minStar, this.repoPagination.currentPage,
        (response) => {
          this.repos = response.body.items
          this.repoPagination.totalItems = response.body.total_count
        }, (error) => {
          console.log(error)
        })
    }
  }
}
</script>
