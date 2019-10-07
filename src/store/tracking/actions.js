import Vue from 'vue'
import { getTracking } from '../../services/api'

const setTracking = async ({ commit }) => {
    const code = 'PM371835103BR'
    const { data } = await getTracking(code)
    commit('SET_TRACKING', data)
}

export {  
    setTracking
}