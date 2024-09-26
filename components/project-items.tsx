import React from 'react'

const ProjectItems = (
    {
        items
    }: {
        items: Array<{
            title: string,
            description: string,
            exos: string,
            tech: string,
            db: string,
            tasktype: string,
        }>
    }
) => {
    return (
        <div className="h-full lg:w-1/2">
            {items.map((item, index) => (
                <div className="py-3" key={index}>
                    <div className='mb-5'>
                        <h1 className='text-slate-50 text-2xl font-medium font-sans'>{item.title}</h1>
                    </div>
                    <div className='mb-5'>
                        <h1 className='text-slate-50 tracking-tight leading-relaxed'>Description:</h1>
                        <span className=' text-slate-400'>{item.description}</span>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='mb-5'>
                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>Execution OS:</h1>
                            <span className=' text-slate-400'>{item.exos}</span>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>Tech:</h1>
                            <span className=' text-slate-400'>{item.tech}</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='mb-5'>
                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>DataBase:</h1>
                            <span className=' text-slate-400'>{item.db}</span>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>Task Type:</h1>
                            <span className=' text-slate-400'>{item.tasktype}</span>
                        </div>
                    </div>
                    <div className="p-[.5px] mt-5 bg-gradient-to-r from-orange-500/0  via-orange-500 to-orange-500/0 rounded-lg"></div>
                </div>
            ))}
        </div>
    )
}

export default ProjectItems
