import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(query.trim())
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full gap-2 sm:gap-3">
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search headlines (e.g. climate, bitcoin, elections)"
                className="border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 flex-1 text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition"
            >
                Search
            </button>
        </form>
    )
}

export default SearchBar
