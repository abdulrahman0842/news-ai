// import React from 'react'

// const SourceList = ({ sources, activeSource, onSourceSelect }) => (
//     <div className="mt-5">
//         <h2 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">News Sources</h2>
//         <div className="flex flex-wrap gap-2">
//             {sources.map((source) => {
//                 const sourceId = source.id || null
//                 const active = activeSource === sourceId
//                 const disabled = !sourceId

//                 return (
//                     <button
//                         key={sourceId || source.name}
//                         onClick={() => !disabled && onSourceSelect(sourceId)}
//                         disabled={disabled}
//                         className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${disabled ? 'bg-slate-200 text-slate-400 border-slate-200 dark:bg-slate-700 dark:text-slate-500 dark:border-slate-700 cursor-not-allowed' : active ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700'}`}
//                     >
//                         {source.name}
//                     </button>
//                 )
//             })}
//         </div>
//     </div>
// )

// export default SourceList
import React from 'react';

const SourceList = ({ sources, activeSource, onSourceSelect }) => (
    <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {sources.map((source) => {
            const sourceId = source.id || null;
            const active = activeSource === sourceId;
            console.log(activeSource, 'source')
            return (
                <button
                    key={sourceId || source.name}
                    onClick={() => sourceId && onSourceSelect(source.name)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${active
                        ? 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400 ring-1 ring-sky-500/50'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                >
                    <span className="truncate block">{source.name}</span>
                </button>
            );
        })}
    </div>
);

export default SourceList;