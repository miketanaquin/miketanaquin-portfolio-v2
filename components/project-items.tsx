import React from 'react'

const ProjectItems = (
    {
        items
    }: {
        items: Array<{
            title: string,
            year: string,
            description: string,
            tech: string[],
        }>
    }
) => {
    return (
        <div className="h-full w-full space-y-6 lg:w-[68%]">
            {items.map((item, index) => (
                <article
                    key={`${item.title}-${index}`}
                    className="group rounded-2xl border border-white/10 bg-zinc-900/75 p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-zinc-900 sm:p-6"
                >
                    <div className='mb-4 flex items-center justify-between gap-3'>
                        <h2 className='text-2xl font-medium text-slate-50'>{item.title}</h2>
                        <span className='text-xs text-slate-400'>{item.year}</span>
                    </div>

                    <p className='mb-5 text-sm leading-7 text-slate-300'>{item.description}</p>

                    <div className='mt-5'>
                        <h3 className='mb-2 text-xs uppercase tracking-[0.18em] text-slate-400'>Tech stack</h3>
                        <div className='flex flex-wrap gap-2'>
                            {item.tech.map((tag, tagIndex) => (
                                <span
                                    key={`${item.title}-tag-${tagIndex}`}
                                    className='rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-slate-200'
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default ProjectItems
