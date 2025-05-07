
import React from 'react'
import { Blog } from '../libs/microcms';
import Image from 'next/image';
import Link from 'next/link';
import Category from './Category';
import Date from './Date';

type Props = {
    blog: Blog[];
};

const BlogList = ({ blog }: Props) => {
    return (
        <div className='w-full max-w-screen-lg mx-auto px-8'>
            {blog.map((article) => (
                <Link
                    className='flex flex-col md:flex-row items-center gap-10 border-b border-gray-200 py-5'
                    href={`/blog/${article.id}`}
                    key={article.id}
                >
                    {article.thumbnail
                        ? (
                            <Image
                                style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                                className='w-full md:w-1/2 rounded-md'
                                src={article.thumbnail.url}
                                alt='image'
                                width={article.thumbnail.width}
                                height={article.thumbnail.height}
                                priority
                            />
                        )
                        : (
                            <Image
                                style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                                className='w-full md:w-1/2 rounded-md'
                                src={'/no-image.png'}
                                alt='no-iamge'
                                width={1200}
                                height={600}
                                priority
                            />
                        )
                    }
                    <dl className='w-full md:w-1/2'>
                        <dt className='text-xl font-bold mb-5'>{article.title}</dt>
                        <dd className='flex items-center gap-5'>
                            <Category category={article.category} />
                            <Date date={article.publishedAt ?? article.createdAt} />
                        </dd>
                    </dl>
                </Link>
            ))}
        </div>
    );
};

export default BlogList;