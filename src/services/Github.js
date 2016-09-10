import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const baseurl = 'https://api.github.com'

export default {

  searchRepos (query, page, callback, error) {
    let url = `${baseurl}/search/repositories?q=${encodeURIComponent(query)}&page=${page}&sort=stars&order=desc`
    Vue.http.get(url).then(callback, error)
  },

  searchRepoByLang (lang, minStar, page, callback, error) {
    this.searchRepos('stars:>=' + minStar + ' language:' + lang, page, callback, error)
  },

  getRepos (username, callback) {
    var url = `${baseurl}/users/${username}/repos`
    Vue.http.get(url).then(callback)
  },

  getUser (username, callback) {
    var url = `${baseurl}/users/${username}/repos`
    Vue.http.get(url).then(callback)
  }

}
