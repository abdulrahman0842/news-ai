import { useEffect, useState, useCallback } from 'react';
import Navbar from '../components/Navbar.jsx';
import CategoryList from '../components/CategoryList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SourceList from '../components/SourceList.jsx';
import ArticleGrid from '../components/ArticleGrid.jsx';
import { getTopHeadlines, getSources } from '../services/api.js';

const CATEGORIES = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [sources, setSources] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState('Business');
    const [activeSource, setActiveSource] = useState(null);

    // API Logic (kept same as your functional logic)
    const loadTopHeadlines = useCallback(async (params) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getTopHeadlines(params);
            setArticles(Array.isArray(data) ? data : []);
        } catch (err) {
            setArticles([]);
            setError(err?.message || 'Unable to load articles');
        } finally {
            setLoading(false);
        }
    }, []);

    const loadSources = useCallback(async () => {
        try {
            const data = await getSources();
            setSources(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Sources load failed", err);
        }
    }, []);

    useEffect(() => {
        loadTopHeadlines({ country: 'us', category: activeCategory });
        loadSources();
    }, [loadTopHeadlines, loadSources, activeCategory]);

    // Handlers
    const handleCategorySelect = (category) => {
        setActiveCategory(category);
        setActiveSource(null);
        loadTopHeadlines({ country: 'us', category });
    };

    const handleSourceSelect = (sourceName) => {
        const nextSource = activeSource === sourceName ? null : sourceName;
        setActiveSource(nextSource);
        setActiveCategory(nextSource ? null : 'Business');
        loadTopHeadlines(nextSource ? { source: nextSource } : { country: 'us', category: 'general' });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            <Navbar />

            <main className="mx-auto max-w-[1400px] px-4 py-8 lg:px-8">
                {/* Top Search Bar - Centered and Slimmer */}
                <div className="mb-8 max-w-2xl mx-auto">
                    <SearchBar onSearch={(q) => loadTopHeadlines({ q })} />
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar: Navigation & Sources */}
                    <aside className="lg:w-64 flex-shrink-0 space-y-8">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Categories</h3>
                            <CategoryList
                                categories={CATEGORIES}
                                activeCategory={activeCategory}
                                onCategorySelect={handleCategorySelect}
                            />
                        </div>

                        <div className="hidden lg:block border-t border-slate-200 dark:border-slate-800 pt-8">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Top Sources</h3>
                            <SourceList
                                sources={sources}
                                activeSource={activeSource}
                                onSourceSelect={handleSourceSelect}
                            />
                        </div>
                    </aside>

                    {/* Right Content: Article Feed */}
                    <section className="flex-1">
                        <header className="mb-6 flex items-center justify-between">
                            <h1 className="text-2xl font-bold capitalize">
                                {activeSource ? 'From Source' : `${activeCategory || 'Latest'} News`}
                            </h1>
                            <span className="text-sm text-slate-500">{articles.length} articles found</span>
                        </header>

                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-64 animate-pulse bg-slate-200 dark:bg-slate-800 rounded-2xl" />
                                ))}
                            </div>
                        ) : error ? (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-2xl text-red-600 dark:text-red-400">
                                {error}
                            </div>
                        ) : articles.length === 0 ? (
                            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                                <p className="text-slate-500">No articles found. Try a different filter.</p>
                            </div>
                        ) : (
                            <ArticleGrid articles={articles} />
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Home;