import React, { useEffect, useState, useCallback } from 'react'
import Navbar from '../components/Navbar.jsx'
import CategoryList from '../components/CategoryList.jsx'
import SearchBar from '../components/SearchBar.jsx'
import SourceList from '../components/SourceList.jsx'
import ArticleGrid from '../components/ArticleGrid.jsx'
import { getTopHeadlines, getSources } from '../services/api.js'

const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

const Home = () => {
    const [articles, setArticles] = useState([])
    const [sources, setSources] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [activeCategory, setActiveCategory] = useState('general')
    const [activeSource, setActiveSource] = useState(null)

    const loadTopHeadlines = useCallback(async (params) => {
        setLoading(true)
        setError(null)

        try {
            const data = await getTopHeadlines(params)

            if (!data || !Array.isArray(data)) {
                throw new Error('API returned invalid articles data')
            }
            setArticles(data)
        } catch (err) {
            setArticles([])
            setError(err?.message || 'Unable to load articles')
        } finally {
            setLoading(false)
        }
    }, [])

    const loadSources = useCallback(async () => {
        setError(null)

        try {
            const data = await getSources()
            if (!data || !Array.isArray(data)) {
                throw new Error('API returned invalid sources data')
            }
            setSources(data)
        } catch (err) {
            setError(err?.message || 'Unable to load sources')
            setSources([])
        }
    }, [])

    useEffect(() => {
        loadTopHeadlines({ country: 'us',  })
        loadSources()
    }, [loadTopHeadlines, loadSources, activeCategory])

    const handleCategorySelect = (category) => {
        setActiveCategory(category)
        setActiveSource(null)
        loadTopHeadlines({ country: 'us', category })
    }

    const handleSourceSelect = (sourceId) => {
        if (activeSource === sourceId) {
            setActiveSource(null)
            setActiveCategory('general')
            loadTopHeadlines({ country: 'us', category: 'general' })
            return
        }

        setActiveSource(sourceId)
        setActiveCategory(null)
        loadTopHeadlines({ source: sourceId })
    }

    const handleSearch = (query) => {
        if (!query) {
            setActiveSource(null)
            setActiveCategory('general')
            loadTopHeadlines({ country: 'us', category: 'general' })
            return
        }

        setActiveSource(null)
        setActiveCategory(null)
        loadTopHeadlines({ country: 'us', q: query })
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            <Navbar />
            <main className="mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-7xl">
                <SearchBar onSearch={handleSearch} />

                <section className="mt-5">
                    <CategoryList categories={CATEGORIES} activeCategory={activeCategory} onCategorySelect={handleCategorySelect} />
                </section>

                <section className="mt-5">
                    <SourceList sources={sources} activeSource={activeSource} onSourceSelect={handleSourceSelect} />
                </section>

                {loading && (
                    <div className="flex items-center justify-center p-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-sky-500 dark:border-sky-300" />
                    </div>
                )}

                {error && (
                    <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-200">
                        <strong>Error:</strong> {error}
                    </div>
                )}

                {!loading && !error && articles.length === 0 && (
                    <div className="mt-4 rounded-lg border border-slate-300/70 bg-white/70 p-6 text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
                        No news articles found for this filter. Change the category, source, or search term.
                    </div>
                )}

                {!loading && !error && articles.length > 0 && <ArticleGrid articles={articles} />}
            </main>
        </div>
    )
}

export default Home
