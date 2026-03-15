import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    return (
        <form
            onSubmit={(e) => { e.preventDefault(); onSearch(query); }}
            className="relative w-full max-w-2xl mx-auto"
        >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-11 pr-32 py-4 text-sm focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all shadow-sm"
                placeholder="Search global headlines..."
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-slate-900 dark:bg-sky-600 text-white text-xs font-bold hover:opacity-90 transition-opacity">
                SEARCH
            </button>
        </form>
    );
};
export default SearchBar
