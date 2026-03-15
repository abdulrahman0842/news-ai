// import React from 'react'

// const ArticleCard = ({ article }) => {
//     const {
//         urlToImage,
//         title,
//         description,
//         source,
//         publishedAt,
//         url,
//     } = article

//     const formattedDate = publishedAt ? new Date(publishedAt).toLocaleString() : 'Unknown date'

//     return (
//         <article className="flex flex-col rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition overflow-hidden bg-white dark:bg-slate-900">
//             <div className="h-44 sm:h-52 bg-slate-100 dark:bg-slate-800">
//                 {urlToImage ? (
//                     <img
//                         src={urlToImage}
//                         alt={title}
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                     />
//                 ) : (
//                     <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-slate-400">No image available</div>
//                 )}
//             </div>
//             <div className="p-4 flex flex-col flex-1">
//                 <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">{source?.name || 'Unknown source'}</div>
//                 <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug mb-2">{title}</h3>
//                 <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 flex-1">{description || 'No description available.'}</p>
//                 <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">{formattedDate}</div>
//                 <a
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center px-3 py-2 w-full rounded-md bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition"
//                 >
//                     Read More
//                 </a>
//             </div>
//         </article>
//     )
// }

// export default ArticleCard

const ArticleCard = ({ article }) => {
    const { urlToImage, title, description, source, publishedAt, url } = article;
    const date = new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return (
        <article className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-52 overflow-hidden">
                {urlToImage ? (
                    <img src={urlToImage} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 italic">No Preview</div>
                )}
                <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {source?.name}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="text-[11px] font-medium text-slate-500 mb-2">{date}</div>
                <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-slate-100 mb-2 line-clamp-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                    {description || "No description provided for this headline."}
                </p>
                <a
                    href={url}
                    target="_blank"
                    className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 group/link"
                >
                    Read Full Story
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
            </div>
        </article>
    )
}
export default ArticleCard
