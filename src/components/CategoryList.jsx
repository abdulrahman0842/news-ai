import React from 'react'

const CategoryList = ({ categories, activeCategory, onCategorySelect }) => (
    <div className="mt-4 overflow-x-auto py-2 hide-scrollbar">
        <div className="inline-flex space-x-2">
            {categories.map((category) => {
                const active = activeCategory === category
                return (
                    <button
                        key={category}
                        onClick={() => onCategorySelect(category)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition ${active ? 'bg-sky-600 text-white border-sky-600 dark:bg-sky-500 dark:border-sky-500' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700'}`}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    </div>
)

export default CategoryList
