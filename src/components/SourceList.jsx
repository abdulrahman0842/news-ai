import React from 'react'

const SourceList = ({ sources, activeSource, onSourceSelect }) => (
    <div className="mt-5">
        <h2 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">News Sources</h2>
        <div className="flex flex-wrap gap-2">
            {sources.map((source) => {
                const sourceId = source.id || null
                const active = activeSource === sourceId
                const disabled = !sourceId

                return (
                    <button
                        key={sourceId || source.name}
                        onClick={() => !disabled && onSourceSelect(sourceId)}
                        disabled={disabled}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${disabled ? 'bg-slate-200 text-slate-400 border-slate-200 dark:bg-slate-700 dark:text-slate-500 dark:border-slate-700 cursor-not-allowed' : active ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700'}`}
                    >
                        {source.name}
                    </button>
                )
            })}
        </div>
    </div>
)

export default SourceList
