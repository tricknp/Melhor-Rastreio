import Axios from "axios";
import { baseUrl } from './baseURL'

export const getTracking = async (code) => {
    const { data } = await Axios.get(`${baseUrl}/tracking?search=${code}`)
    return data
}
