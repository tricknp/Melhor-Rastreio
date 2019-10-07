import Vue from 'vue'
import Vuex from 'vuex'

import tracking from './tracking'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tracking
  }   
})
