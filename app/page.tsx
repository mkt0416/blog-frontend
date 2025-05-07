
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center px-8'>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-5xl font-extrabold'>MyBlogSite</h1>
                <Link href={'/blog'} className='border-2 border-slate-600 px-5 py-3 rounded-full bg-blue-300
                hover:bg-blue-500 duration-300'>
                    BlogList
                </Link>
            </div>
        </div>
    )
}

export default Page