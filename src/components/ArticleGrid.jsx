import React from 'react'
import ArticleCard from './ArticleCard.jsx'

const ArticleGrid = ({ articles }) => (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
        {articles.map((article) => (
            <ArticleCard key={article.url || `${article.title}-${Math.random()}`} article={article} />
        ))}
    </div>
)

export default ArticleGrid
