const CategoryList = ({ categories, activeCategory, onCategorySelect }) => (
    <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
            const active = activeCategory === category;
            return (
                <button
                    key={category}
                    onClick={() => onCategorySelect(category)}
                    className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${active
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-200 dark:shadow-none'
                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400'
                        }`}
                >
                    {category}
                </button>
            );
        })}
    </div>
)
export default CategoryList
