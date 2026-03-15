import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/articles/',
    timeout: 12000,
})

export const getTopHeadlines = async (params = {}) => {
    const response = await api.get('/top-headlines', { params })
    const payload = response.data
console.log(response.data,'this is data ')
    if (Array.isArray(payload)) {
        return payload
    }

    if (payload && Array.isArray(payload.articles)) {
        return payload.articles
    }

    throw new Error('API returned invalid articles data')
}

export const getSources = async () => {
    const response = await api.get('/sources')
    const payload = response.data

    if (Array.isArray(payload)) {
        return payload
    }

    if (payload && Array.isArray(payload.sources)) {
        return payload.sources
    }

    throw new Error('API returned invalid sources data')
}

export default api
