
import React from 'react'
import { BLOG_LIST_LIMIT } from '../constants';
import Link from 'next/link';

type Props = {
    totalCount: number;
    current?: number;
    basePath?: string;
};

const Pagenation = ({ totalCount, current = 1, basePath = '/blog' }: Props) => {
    const pages = Array.from(
        { length: Math.ceil(totalCount / BLOG_LIST_LIMIT) },
        (_, i) => i + 1
    );

    return (
        <nav className='mt-10'>
            <ul className='flex items-center justify-center gap-5'>
                {pages.map((p) => (
                    <li key={p}>
                        {p !== current
                            ? (
                                <Link href={`${basePath}/p/${p}`}>
                                    {p}
                                </Link>
                            )
                            : (
                                <span className='bg-gray-400 px-3 py-2 rounded-md'>
                                    {p}
                                </span>
                            )
                        }
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagenation;