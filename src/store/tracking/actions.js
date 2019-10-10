import Vue from 'vue'
import { getTracking } from '../../services/api'

const setTracking = async ({ commit }) => {
    try{
        const code = 'PM371835103BR'
        const { data } = await getTracking(code)
        commit('SET_TRACKING', data)
    }catch(err){
        console.log(err)
    }
}

export {
    setTracking
}