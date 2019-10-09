import Vue from 'vue'
import { getTracking } from '../../services/api'

const setTracking = async ({ commit }) => {
    try{
        const code = 'PM371835103BR'
        const { data } = await getTracking(code)
        console.log('veio pra ca')
        commit('SET_TRACKING', data)
        console.log( 'commitei')
    }catch(err){
        console.log(err)
    }
}

export {
    setTracking
}