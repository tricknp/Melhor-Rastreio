import Axios from "axios";
import { baseUrl } from './baseURL'

export const getTracking = async (code) => {
    try {
        const { data } = await Axios.get(`${baseUrl}/tracking?search=${code}`)
        console.log('chegou aq')
        return data
    } catch(err) {
        console.error(err)
    }
}
