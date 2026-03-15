// import React from 'react'

// const Navbar = () => (
//     <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-slate-900/80 dark:border-slate-700">
//         <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
//             <div>
//                 <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">News AI</h1>
//                 <p className="text-sm text-slate-600 dark:text-slate-300">Live headlines from your selected categories, sources, or search</p>
//             </div>
//             <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Powered by NewsAPI</span>
//         </div>
//     </header>
// )

// export default Navbar

const Navbar = () => (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                </div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
                    News AI
                </h1>
            </div>
            <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Live Data • 2026
            </div>
        </div>
    </header>
)

export default Navbar