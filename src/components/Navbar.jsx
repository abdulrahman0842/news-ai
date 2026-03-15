import React from 'react'

const Navbar = () => (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-slate-900/80 dark:border-slate-700">
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">News AI</h1>
                <p className="text-sm text-slate-600 dark:text-slate-300">Live headlines from your selected categories, sources, or search</p>
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Powered by NewsAPI</span>
        </div>
    </header>
)

export default Navbar
