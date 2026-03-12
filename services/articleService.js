import axios from "axios";

const baseUrl = process.env.BASE_URL
const apiKey = process.env.NEWS_API_KEY

export const getTopHeadlines = async ({ country = null, category = null, query = null, sources = null } = {}) => {

    let params = {
        q: query,
        country,
        category,
        apiKey
    }
    if (sources) {
        params = {
            sources,
            apiKey
        }
    }

    try {
        const response = await axios.get(`${baseUrl}top-headlines`, {
            params
        })
        return response.data.articles;

    } catch (error) {
        console.log('Error:', error)
        return error
    }
}
