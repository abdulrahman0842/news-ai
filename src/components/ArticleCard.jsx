import React from 'react'

const ArticleCard = ({ article }) => {
    const {
        urlToImage,
        title,
        description,
        source,
        publishedAt,
        url,
    } = article

    const formattedDate = publishedAt ? new Date(publishedAt).toLocaleString() : 'Unknown date'

    return (
        <article className="flex flex-col rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition overflow-hidden bg-white dark:bg-slate-900">
            <div className="h-44 sm:h-52 bg-slate-100 dark:bg-slate-800">
                {urlToImage ? (
                    <img
                        src={urlToImage}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-slate-400">No image available</div>
                )}
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">{source?.name || 'Unknown source'}</div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug mb-2">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 flex-1">{description || 'No description available.'}</p>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">{formattedDate}</div>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-2 w-full rounded-md bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition"
                >
                    Read More
                </a>
            </div>
        </article>
    )
}

export default ArticleCard
