
import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <header className='py-8 bg-slate-200'>
            <div className='w-full max-w-screen-xl flex flex-col md:flex-row items-center mx-auto px-8'>
                <h1 className='flex-1 text-xl font-bold'>MyBlogSite</h1>
                <nav>
                    <ul className='flex items-center gap-5 font-semibold'>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/blog'}>BLog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;