import { getTopHeadlines } from "./articleService.js"
import ArticleModel from '../models/articleModel.js';

const categories = ['Business', 'Technology', 'Entertainment', 'Sports']
const countries = ['us', 'in', 'ca', 'uk']

const fetchByCategories = async () => {
    try {

        categories.forEach(async (cat) => {
            const country = 'us';
            const response = await getTopHeadlines({ country: country, category: cat });

            if (response.length === 0) return;

            let articles = response.map(article => ({
                ...article,
                category: cat,
                country: country,
                fetchedAt: new Date()
            }))

            const data = await ArticleModel.bulkWrite(articles.map(article => ({
                updateOne: {
                    filter: { url: article.url },
                    update: { $set: article },
                    uprest: true
                }
            })));
        })
    } catch (error) {
        console.log('Error Inserting Articles fetchByCategories()- ', error);
    }
}

const fetchByCountries = async (country) => {
    try {
        countries.forEach(async (country) => {
            const response = await getTopHeadlines({ country: country })
            if (response.length === 0) return;
            let articles = response.map(article => ({
                ...article,
                country: country,
                fetchedAt: new Date()
            }))
            const data = await ArticleModel.bulkWrite(articles.map(article => ({
                updateOne: {
                    filter: { url: article.url },
                    update: { $set: article },
                    uprest: true
                }
            })))
        })
    } catch (error) {
        console.log('Error Inserting Articles fetchByCountries()- ', error);
    }
}

export const subscribeToNewsApi = () => {
    const interval = setInterval(() => {
        fetchByCategories()
        fetchByCountries()
    }, 3600000)
    
}
// const news = {
//     source: {
//         id: "1",
//         name: "mlg"
//     },
//     title: "title",
//     description: "desc",
//     url: "url of news",
//     urlToImage: "image url",
//     publishedAt: "02/05/2026",
//     content: "contente",
//     category: "business",
//     country: "in"
// }
