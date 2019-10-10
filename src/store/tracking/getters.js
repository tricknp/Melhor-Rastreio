import Vue from 'vue'
import { getTracking } from '../../services/api'

const getTrackingStatus = async state => {
    const code = 'PM371835103BR'
    const { data } = await getTracking(code)
    const currentStatus = data.events.map(el => el.status)
    
    return currentStatus
}

export {
    getTrackingStatus
}