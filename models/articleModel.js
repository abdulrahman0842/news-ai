import mongoose from 'mongoose'

const articleSchema = mongoose.Schema.create({
    source: {
        id: String,
        name: String
    },
    author: String,
    title: {
        type: String,
        required: true
    },
    description: String,
    url: {
        type: String,
        required: true,
        unique: true
    },
    urlToImage: String,
    publishedAt: Date   ,
    content: String,
    category: String,
    country: String
}, {
    timeStamps: true
})

export default mongoose.model('Article', articleSchema)